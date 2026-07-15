interface OverviewProps{
    address: string,
    solBalance: number,
    tokenCount: number,
    nftCount: number
}

import React from 'react'

const Overview = ({address,solBalance,tokenCount,nftCount}:OverviewProps) => {
  return (
    <div>
        <div>
        <p className="text-sm text-gray-400">Wallet Address</p>
        <p className="break-all">address</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400">SOL Balance</p>
          <p className="text-xl font-semibold">{solBalance.toFixed(4)}</p>
        </div>
        <div className="border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400">Tokens</p>
          <p className="text-xl font-semibold">{tokenCount}</p>
        </div>
        <div className="border border-gray-700 rounded-xl p-4">
          <p className="text-sm text-gray-400">NFTs</p>
          <p className="text-xl font-semibold">{nftCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Overview

 