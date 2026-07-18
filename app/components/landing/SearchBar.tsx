"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const SearchBar = () => {
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  if (address === "") {
    setError("Please enter an address");
    return;
  }

  router.push(`/analyse/${address}`);
  };

  return (
    <div
    className="flex justify-center pb-2">
      <div>
        <form onSubmit={onSubmit} className="flex gap-4">
          <input
            type="text"
            placeholder="Enter wallet address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="rounded-3xl border-2 border-blue-500 px-3 py-3 text-gray-200 outline-none lg:w-125"
          />
          <div className="flex items-center">
            <Button />
          </div>
        </form>
        
        {error && <p className="mt-2 text-red-500 text-sm text-center">{error}</p>}
      </div>
      </div>
  );
};

export default SearchBar;