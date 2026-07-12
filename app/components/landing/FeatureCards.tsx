import React from "react";
import FeatureCard from "./FeatureCard";

import { IoMdPie } from "react-icons/io";
import { GiToken } from "react-icons/gi";
import { FaRegImage } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-8 py-9">
      <FeatureCard
        icon={<IoMdPie />}
        title="Portfolio Value"
        description="Live SOL + SPL token valuations and allocation."
      />

      <FeatureCard
        icon={<GiToken />}
        title="Token Holdings"
        description="Every fungible token with prices and balances."
      />

      <FeatureCard
        icon={<FaRegImage />}
        title="NFT Collection"
        description="View NFTs with metadata and floor prices."
      />

      <FeatureCard
        icon={<HiOutlineClock />}
        title="Transaction History"
        description="Analyze transfers, swaps and wallet activity."
      />
    </div>
  );
};

export default FeatureCards;