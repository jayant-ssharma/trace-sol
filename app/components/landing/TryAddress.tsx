import React from 'react'
import TryAddressBtn from './TryAddressBtn'
import { CiRead } from "react-icons/ci";

const TryAddress = () => {
    return (
        
            <div
                className='pt-4 flex justify-center  text-white gap-4'>
                <div 
                className='flex pt-1 gap-2 '>
                     
                    <CiRead className="text-2xl text-gray-500" />
                    
                    <p>Try : </p>
                    
                </div>
            <TryAddressBtn/>
            </div>
    )
}

export default TryAddress