"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { WalletData, Token, NFTAsset } from "@/app/components/types/wallet";
import Overview from "./analysePageComponent/Overview";
import TokenHoldings from "./analysePageComponent/TokenHoldings";
import NftHoldings from "./analysePageComponent/NftHoldings";
const AnalysePage = () => {
  const { address } = useParams<{ address: string }>();
  const [data, setData] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/analyse/${address}`);

        if (!response.ok) {
          setError("Failed to fetch wallet data");
          return;
        }

        const result: WalletData = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [address]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 rounded-full border-4 border-gray-400 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex h-screen text-3xl  items-center justify-center text-red-500">
        {error || "No data found"}
      </div>
    );
  }
 console.log(data)  //umm checking
  return (
    <div className="text-white p-8 space-y-8">
      
<Overview
    address={address}
    solBalance={data.solBalance}
    tokenCount={data.tokens.length}
    nftCount={data.nfts.total}
/>
  <TokenHoldings
      tokens={data.tokens}
    />

  <NftHoldings
  total={data.nfts.total}
  items={data.nfts.items}
/>
    </div>
  );
};

export default AnalysePage;
