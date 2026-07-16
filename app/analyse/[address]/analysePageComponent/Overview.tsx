import React from "react";

interface OverviewProps {
  address: string;
  solBalance: number;
  tokenCount: number;
  nftCount: number;
  solValue: number;
  solPrice?: number;
}

const Overview = ({address,solBalance,tokenCount,nftCount,solValue,solPrice
   
}: OverviewProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-400">Wallet Address</p>
          <p className="break-all">{address}</p>
        </div>
        <div className="flex gap-2 shrink-0">
         
          <a
            href={`https://explorer.solana.com/address/${address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gray-700 rounded-lg px-3 py-1.5 hover:border-blue-500 transition-colors"
          >
            View on Explorer
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400">Sol Value</p>
          <p className="text-xl font-semibold">
            $
            {solValue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400">SOL Balance</p>
          <p className="text-xl font-semibold">{solBalance.toFixed(4)}</p>
          {solPrice ? (
            <p className="text-xs text-gray-500 mt-1">1 SOL = ${solPrice.toFixed(2)}</p>
          ) : `yooo`}
        </div>


        <div className="border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400">Tokens</p>
          <p className="text-xl font-semibold">{tokenCount}</p>
        </div>

        <div className="border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400">NFTs</p>
          <p className="text-xl font-semibold">{nftCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;

 