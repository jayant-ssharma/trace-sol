import { NextRequest, NextResponse } from "next/server";
interface RouteProps {
  params: Promise<{ address: string }>;
}
export async function GET(req: NextRequest, { params }: RouteProps) {
  const { address } = await params;
  const api = process.env.HELIUS_API_KEY;

  if (!api) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const apiUrl = `https://mainnet.helius-rpc.com/?api-key=${api}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "trace-sol",
        method: "getAssetsByOwner",
        params: {
          ownerAddress: address,
          page: 1,
          limit: 50,
        },
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from Helius" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}