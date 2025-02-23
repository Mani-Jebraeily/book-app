import React from 'react'

import { CiSearch } from "react-icons/ci";

function SearchBox({search,setSearch,searchHandeler}) {
  return (
    <>
    <div className='flex mb-12.5'>  
         <input type="text" placeholder='Search title' value={search}  onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}  className='w-75.5 h-10 bg-[#e0e0e0] text-black border-none rounded-sm p-2.5 mr-2.5 text-[1rem] focus:outline-gray-800'/>
         <button  onClick={searchHandeler}  className='size-10 bg-[#6552f4] text-[#e0e0e0] border-none rounded-sm text-[1.2rem] cursor-pointer flex justify-center items-center'>
         <CiSearch fontSize="1.8rem"/>
         </button>
    </div>
    </>
  )
}

export default SearchBox