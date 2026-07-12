'use client'
import React from 'react'
import Button from './Button'
 
const Search = () => {
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log('Submitted')
        
    }
    return (
         <div
        className=' pt-7 lg:pt-10 flex justify-center   '> 
            <form
            onSubmit={onSubmit}
            className='flex gap-4'>
                <input type="text"
                    placeholder='Paste address... '
                    className='lg:w-125 text-gray-200 
                   border-blue-500 border-2 outline-none hover:  rounded-3xl px-5 py-3'  />
                <div
                className='flex items-center'>
                <Button/>
                </div>
             
             </form>
             </div>
    )
}

export default Search