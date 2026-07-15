'use client'
import { useRouter } from "next/navigation";

const TryAddressBtn = () => {
  const router = useRouter();

  const analyse = (address: string) => {
    router.push(`/analyse/${address}`);
  };

  return (
    <div className="flex gap-2.5">
      <button
        className="hover:border-blue-200 hover:cursor-pointer active:scale-95 py-0.5 px-2 border-gray-600 border rounded-2xl"
        onClick={() => analyse("6Yh9zxU31jEDeMy7qSTn3wx2BezHuKffwuzFd8w58N2k")}
      >
        toly
      </button>

      <button
        className="hover:border-blue-200 hover:cursor-pointer active:scale-95 py-0.5 px-2 border-gray-600 border rounded-2xl"
        onClick={() =>
          analyse("4TYF8iW8bXET9C8aFgJoiUHhNtpBg5bqRsxSptCExvz7")
        }
      >
        whale
      </button>
    </div>
  );
};

export default TryAddressBtn;