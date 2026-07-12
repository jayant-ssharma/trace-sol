import React from "react";
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="w-85 border-2 border-gray-800 rounded-3xl px-4 py-3 transition-all
duration-150
ease-in-out
hover:scale-105">
      <div className="w-fit rounded-xl border-4 border-gray-500 bg-gray-500 text-white text-xl">
        {icon}
      </div>

      <h3 className="pt-3 font-bold text-white">
        {title}
      </h3>

      <p className="pt-1 text-sm font-extralight text-white text-nowrap">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;