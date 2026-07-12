import HeroTitle from "./HeroTitle";
import Search from "./Search";
import HeroPara from "./HeroPara";
import TryAddress from "./TryAddress";
import FeatureCards from "./FeatureCards";

const Main = () => {
  return (
    <div className="flex justify-center px-4 py-9 lg:px-0">
      <div className="h-fit border bg-slate-900/40 py-10 backdrop-blur-2xl lg:w-3xl rounded-4xl">
        <HeroTitle />
        <HeroPara />
        <Search />
        <TryAddress />
        <FeatureCards />
      </div>
    </div>
  );
};

export default Main;