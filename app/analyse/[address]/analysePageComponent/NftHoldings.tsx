import { NFTAsset } from "@/app/components/types/wallet";

type NftHoldingsProps = {
  total: number;
  items: NFTAsset[];
};

const NftHoldings = ({ total, items }: NftHoldingsProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">
        NFT Gallery ({total})
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {items.map((nft) => (
          <div
            key={nft.id}
            className="border border-gray-800 hover:border-cyan-900 rounded-lg overflow-hidden"
          >
            <img
              src={
                nft.content?.links?.image ||
                nft.content?.files?.[0]?.cdn_uri
              }
              alt={nft.content?.metadata?.name || "NFT"}
              className="w-full aspect-square object-cover"
            />

            <p className="text-xs p-2 truncate">
              {nft.content?.metadata?.name || "Unnamed"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftHoldings;