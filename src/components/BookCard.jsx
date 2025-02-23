import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";



function BookCard({data,handelLikeList}) {
    const [like,setLike]=useState(false)

    const likeHandeler=()=>{
        handelLikeList(data,like)
        setLike(like=>!like)
    }
    
  return (
    <>
     <div key={data.id} className='flex p-2.5 mb-2.5 bg-[#303030] rounded-xl'>
         <img src={data.image} alt="book image" className='w-15  rounded-md mr-7.5'  />
         <div className='w-[100%] flex flex-col justify-between'>
             <h3 className=' text-xl'>{data.title}</h3>
             <p>{data.author}</p>
             <span className='flex gap-1.5 mr-5 text-[0.85rem] text-[#959595]'>
                 <p>{data.language}</p>
                 <p>{data.pages}</p>
             </span>
         </div>
         <button className=' cursor-pointer h-fit bg-none border-none   transition-transform duration-200 hover:scale-130' onClick={likeHandeler}>
               <AiFillHeart  color={like? "red" : "#e0e0e0"} fontSize="1.8rem"/>
         </button>
     </div>
    </>
  )
}

export default BookCard