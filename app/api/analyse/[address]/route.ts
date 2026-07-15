import { NextRequest, NextResponse } from "next/server";
import {
  NFTAssetsResult,
  RawToken,
  Token,
  TokenMetadata,
  WalletData,
  NFTContent,
} from "@/app/components/types/wallet";

interface RouteProps {
  params: Promise<{ address: string }>;
}

interface TokenAccountInfo {
  mint: string;
  tokenAmount: {
    uiAmount: number;
    decimals: number;
  };
}

export async function GET(req: NextRequest, { params }: RouteProps) {
  const { address } = await params;
  const api = process.env.HELIUS_API_KEY;

  if (!api) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const apiUrl = `https://mainnet.helius-rpc.com/?api-key=${api}`;

    // 1. NFTs
    const assetsResponse = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "trace-sol",
        method: "getAssetsByOwner",
        params: { ownerAddress: address, page: 1, limit: 50 },
      }),
    });
    if (!assetsResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch from Helius" }, { status: assetsResponse.status });
    }
    const assetsData: { result: NFTAssetsResult } = await assetsResponse.json();

    // 2. SOL balance
    const balanceResponse = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "trace-sol-balance",
        method: "getBalance",
        params: [address],
      }),
    });
    if (!balanceResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch balance from Helius" }, { status: balanceResponse.status });
    }
    const balanceData: { result: { value: number } } = await balanceResponse.json();
    const solBalance = balanceData.result.value / 1_000_000_000;

    // 3. SPL token holdings (mint + amount only)
    const tokensResponse = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "trace-sol-tokens",
        method: "getTokenAccountsByOwner",
        params: [
          address,
          { programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" },
          { encoding: "jsonParsed" },
        ],
      }),
    });
    if (!tokensResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch tokens from Helius" }, { status: tokensResponse.status });
    }
    const tokensData: { result: { value: { account: { data: { parsed: { info: TokenAccountInfo } } } }[] } } =
      await tokensResponse.json();

    const rawTokens: RawToken[] = tokensData.result.value
      .map((account) => {
        const info = account.account.data.parsed.info;
        return {
          mint: info.mint,
          amount: info.tokenAmount.uiAmount,
          decimals: info.tokenAmount.decimals,
        };
      })
      .filter((token) => token.amount > 0);

    // 4. Token metadata — batch lookup for all mints at once
    let tokens: Token[] = rawTokens;
    if (rawTokens.length > 0) {
      const mints = rawTokens.map((t) => t.mint);

      const metadataResponse = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: "trace-sol-metadata",
          method: "getAssetBatch",
          params: { ids: mints },
        }),
      });

      if (metadataResponse.ok) {
        const metadataData: { result: { id: string; content?: NFTContent }[] } = await metadataResponse.json();

        const metadataMap = new Map<string, TokenMetadata>(
          metadataData.result.map((asset) => [
            asset.id,
            {
              name: asset?.content?.metadata?.name || "Unknown Token",
              symbol: asset?.content?.metadata?.symbol || "",
              image: asset?.content?.links?.image || null,
            },
          ])
        );

        tokens = rawTokens.map((token) => ({
          ...token,
          ...(metadataMap.get(token.mint) || {
            name: "Unknown Token",
            symbol: "",
            image: null,
          }),
        }));
      }
    }

    console.log({ assetsData, solBalance, tokens });

    const walletData: WalletData = {
      nfts: assetsData.result,
      solBalance,
      tokens,
    };

    return NextResponse.json(walletData);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}