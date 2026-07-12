
import DarkVeil from "@/app/components/uiStyle/DarkVeil";

const Background = () => {
  return (
    <div className=" min-h-screen absolute inset-0 -z-10">
      <DarkVeil
        hueShift={22}
        speed={0.6}
        warpAmount={0.2}
        scanlineIntensity={0}
        scanlineFrequency={0.02}
        noiseIntensity={0}
      />
    </div>
  );
};

export default Background;