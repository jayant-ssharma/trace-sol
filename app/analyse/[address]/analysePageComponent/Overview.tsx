import { TransactionSignature } from "@/app/components/types/wallet";
import { IoWalletOutline } from "react-icons/io5";

interface OverviewProps {
  address: string;
  solBalance: number;
  tokenCount: number;
  nftCount: number;
  solValue: number;
  solPrice?: number;
  recentTransactions: TransactionSignature[];
  onViewAllTransactions: ()=> void;
}

const Overview = ({ address, solBalance, tokenCount, nftCount, solValue, solPrice,recentTransactions,onViewAllTransactions,

}: OverviewProps) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-start ">
        <div
          className="flex flex-col gap-2">
          <div
            className="flex items-center gap-2">
            <IoWalletOutline />
            <p className=" text-gray-400">Wallet Address:</p>
          </div>
          <div>
            <p className="break-all">{address}</p>
          </div>
        </div>

        <a
          href={`https://explorer.solana.com/address/${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" border-2 border-gray-700 w-fit rounded-2xl px-3 py-2 text-sm hover:border-blue-900 hover:text-blue-400  transition"
        >
          View on Explorer
        </a>
      </div>

      <div
        className=" flex justify-center items-center">
        <div>
          {solPrice ? (
            <p className="text-lg text-gray-400 mt-3">1 SOL = ${solPrice.toFixed(2)}</p>
          ) : null}
        </div>
      </div>




      <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
        <div className="border-2 border-gray-800 hover:border-cyan-900   rounded-xl p-4 h-fit">
          <p className="text-sm text-gray-400">Sol Value</p>
          <p className="text-xl font-semibold">
            $
            {solValue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="border-2 border-gray-800 hover:border-cyan-900   rounded-xl p-4 h-fit">
          <p className="text-sm text-gray-400">SOL Balance</p>
          <p className="text-xl font-semibold">{solBalance.toFixed(4)}</p>

        </div>


        <div className="border-2 border-gray-800 hover:border-cyan-900   rounded-xl p-4 h-fit">
          <p className="text-sm text-gray-400">Tokens</p>
          <p className="text-xl font-semibold">{tokenCount}</p>
        </div>

        <div className="border-2 border-gray-800 hover:border-cyan-900   rounded-xl p-4 h-fit">
          <p className="text-sm text-gray-400">NFTs</p>
          <p className="text-xl font-semibold">{nftCount}</p>
        </div>
      </div>
      <div>
        <div
        className="mt-6">
          Recent Transactions:
        </div>
  <div className=" space-y-2">
      {recentTransactions.slice(0, 3).map((tx) => (
        <div
          key={tx.signature}
          className="flex items-center justify-between  rounded-lg p-3"
        >
          <div>
            <p className="text-sm break-all">
              {tx.signature.slice(0, 8)}...{tx.signature.slice(-8)}
            </p>
            <p className="text-xs text-gray-400">
              {new Date(tx.blockTime * 1000).toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-xs ${tx.err ? "text-red-500" : "text-green-500"}`}>
              {tx.err ? "Failed" : "Success"}
            </p>
          </div>
        </div>
      ))}
      <div className="mt-2 flex justify-end">
  <button
    onClick={onViewAllTransactions}
    className="px-3 py-2  rounded-2xl border-2 border-gray-800 hover:border-blue-900 hover:text-blue-400  transition hover:cursor-pointer"
  >
    <div
    className="text-sm">View All
    </div>
  </button>
</div>
    </div>
      </div>
    </div>
  );
}

export default Overview;

