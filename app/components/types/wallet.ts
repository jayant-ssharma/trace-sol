export interface NFTFile {
  uri: string;
  cdn_uri?: string;
  mime: string;
}

export interface NFTContent {
  json_uri: string;
  files: NFTFile[];
  metadata: {
    name: string;
    symbol: string;
    description?: string;
    attributes?: { trait_type: string; value: string }[];
  };
  links?: {
    image?: string;
    external_url?: string;
  };
}

export interface NFTOwnership {
  owner: string;
  frozen: boolean;
  delegated: boolean;
  ownership_model: string;
}

export interface NFTAsset {
  interface: string;
  id: string;
  content: NFTContent;
  ownership: NFTOwnership;
  compression: {
    compressed: boolean;
  };
  royalty?: {
    percent: number;
    basis_points: number;
  };
}

export interface NFTAssetsResult {
  total: number;
  limit: number;
  page: number;
  items: NFTAsset[];
}

export interface RawToken {
  mint: string;
  amount: number;
  decimals: number;
}

export interface TokenMetadata {
  name: string;
  symbol: string;
  image: string | null;
}

export interface Token extends RawToken, Partial<TokenMetadata> {}

export interface WalletData {
  nfts: NFTAssetsResult;
  solBalance: number;
  tokens: Token[];
  solValue: number;
     solPrice?: number;
}

export interface PriceEntry {
  usdPrice: number;
  blockId: number;
  decimals: number;
  priceChange24h: number;
}

export interface PriceResponse {
  [mintAddress: string]: PriceEntry;
}

