"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { WalletData,TransactionSignature} from "@/app/components/types/wallet";
import Overview from "./analysePageComponent/Overview";
import TokenHoldings from "./analysePageComponent/TokenHoldings";
import NftHoldings from "./analysePageComponent/NftHoldings";
import Transactions from "./analysePageComponent/Transactions";
import SearchBar from "@/app/components/landing/SearchBar";
const AnalysePage = () => {
  const { address } = useParams<{ address: string }>();
  const [data, setData] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
const [activeTab, setActiveTab] = useState<Tab>("overview");

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
  
 console.log(data.solPrice) //umm checking

type Tab = "overview" | "tokens" | "nfts" | "transactions";

const tabs: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "tokens", label: "Tokens" },
  { id: "nfts", label: "NFTs" },
  { id: "transactions", label: "Transactions" },
];

return (
<

> 
<SearchBar/>
  <div className="text-white px-6 py-4  ">
    {/* Tabs */}
    <div className="lg:px-25 grid grid-cols-2 lg:grid-cols-4 gap-4  pb-4 lg:pb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-3 py-1.5 rounded-2xl transition-colors ${
            activeTab === tab.id
              ? "bg-blue-800 text-white"
              : "bg-gray-800 hover:bg-gray-700 hover:cursor-pointer"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
<div
className="border-2 border-gray-600 mb-6 ">

</div>
    {/* Overview */}
    {activeTab === "overview" && (
      <Overview
        address={address}
        solBalance={data.solBalance}
        tokenCount={data.tokens.length}
        nftCount={data.nfts.total}
        solValue={data.solValue}
        solPrice={data.solPrice}
        recentTransactions={data.recentTransactions}
        onViewAllTransactions={() => setActiveTab("transactions")}
      />
    )}

    {/* Tokens */}
    {activeTab === "tokens" && (
      <TokenHoldings
        tokens={data.tokens}
      />
    )}

    {/* NFTs */}
    {activeTab === "nfts" && (
      <NftHoldings
        total={data.nfts.total}
        items={data.nfts.items}
      />
    )}

    {/* Transactions */}
    {activeTab === "transactions" && (
      <Transactions
       transactions = {data.recentTransactions}/>
    )}

  </div>
  </>
);
};

export default AnalysePage;
