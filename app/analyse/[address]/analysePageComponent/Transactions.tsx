import { TransactionSignature } from "@/app/components/types/wallet";

interface TransactionProps {
  transactions: TransactionSignature[];
}

const Transactions = ({ transactions }: TransactionProps) => {
  if (transactions.length === 0) {
    return <p className="text-gray-400 text-sm">No recent transactions found.</p>;
  }

  return (
    <div className="space-y-2">
      {transactions.map((tx) => (
        <div
          key={tx.signature}
          className="flex items-center justify-between border border-gray-700 rounded-lg p-3"
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
            <a
              href={`https://explorer.solana.com/tx/${tx.signature}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:underline"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;