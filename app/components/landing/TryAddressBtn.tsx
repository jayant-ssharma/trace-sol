'use client'
import { useRouter } from "next/navigation"

const TryAddressBtn = () => {
  const route = useRouter()
  const analyse = (address:string) => {
    
    route.push(`/demo/${address}`)
     console.log(address)
  } 
  return (
    <div
      className='flex gap-2.5'>
      <button
        className=' hover:border-blue-200 hover:cursor-pointer active:scale-95 py-0.5 px-2 border-gray-600 border rounded-2xl'
        onClick={() =>{analyse("demo1") }}>
        toly.sol
      </button>
      <button
        className=' hover:border-blue-200 hover:cursor-pointer  active:scale-95 py-0.5 px-2 border-gray-600 border rounded-2xl'
      onClick={() =>{analyse("demo2") }}>
        random whale
      </button>
    </div>
      )
}

export default TryAddressBtn