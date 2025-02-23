import React from 'react'

function SideCard({liked}) {
    console.log(liked)
  return (
    <>
    <div className=' w-full '>
    <h3 className='text-[1.2rem]'>Favorites</h3>
    {liked.map(i=>(
         <div  key={i.id}>
           <div className='bg-[#7c6ee9]  rounded-sm flex items-center pt-1.5 pb-1.5 pl-2.5 pr-2.5 mt-2.5 mb-2.5'>
             <img className='w-7.5 mr-4' src={i.image} alt="favorite image" />
             <h4>{i.title}</h4>
           </div>   
         </div>
         )
    )}
    </div>


    </>    
  )
}

export default SideCard