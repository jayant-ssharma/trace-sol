import { Token } from "@/app/components/types/wallet";

type TokenHoldingsProps = {
  tokens: Token[];
};

const TokenHoldings = ({ tokens }: TokenHoldingsProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Token Holdings</h2>

      {tokens.length === 0 ? (
        <p className="text-gray-400 text-sm">No tokens found.</p>
      ) : (
        <div className="space-y-2">
          {tokens.map((token) => (
            <div
              key={token.mint}
              className="flex items-center justify-between border border-gray-800 hover:border-cyan-900 rounded-lg p-3"
            >
              <div className="flex items-center gap-3">
                {token.image ? (
                  <img
                    src={token.image}
                    alt={token.symbol}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-700" />
                )}

                <div>
                  <p className="font-medium">{token.name}</p>
                  <p className="text-xs text-gray-400">{token.symbol}</p>
                </div>
              </div>

              <p>{token.amount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenHoldings;