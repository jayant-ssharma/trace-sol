"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const AnalysePage = () => {
  const { address } = useParams<{ address: string }>();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/analyse/${address}`);

        if (!response.ok) {
          setError("Failed to fetch wallet data");
          return;
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [address]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-8">
      <pre
      className="text-white">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AnalysePage;
