import React from 'react'

const TryAddressBtn = () => {
  return (
   <div 
                className='flex gap-2.5'>
                    <button
                        className=' hover:border-blue-200 hover:cursor-pointer py-0.5 px-2 border-gray-600 border rounded-2xl'>toly.sol </button>
                    <button
                     className=' hover:border-blue-200 hover:cursor-pointer py-0.5 px-2 border-gray-600 border rounded-2xl'>random whale</button>
                </div>
  )
}

export default TryAddressBtn