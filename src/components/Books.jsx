import React, { useState } from 'react'

import {books as BookData} from '../constants/mockData'

import BookCard from './BookCard'
import SideCard from './SideCard'
import SearchBox from './SearchBox'

function Books() {
  const [books,setBooks]=useState(BookData)
  const [liked,setLiked]=useState([])
  const [search,setSearch]=useState("")
  
  const handelLikeList=(book,status)=>{
    if(status){
      const newLikedList=liked.filter(i=>i.id!==book.id)
      setLiked(newLikedList)
    }else{
      setLiked(liked=>[...liked,book])
    }
  }

  const searchHandeler=()=>{
    if(search){
      const newBooks= BookData.filter(
        (book)=>book.title.toLocaleLowerCase().includes(search)
      )
      setBooks(newBooks)
    }else{
      setBooks(BookData)
    }
  }
  

  return (
    <>
    <SearchBox search={search} setSearch={setSearch}  searchHandeler={searchHandeler}/>
    <div className='flex'>
        <div className='min-h-[100vh] flex-[2.6_1_0]  '>
              {books.map(book=>(
                <BookCard key={book.id} data={book} handelLikeList={handelLikeList}/>
              ))}
        </div>

       {!!liked.length&&
           <div className={ "h-fit p-[15px] bg-[#6552f4] rounded-xl ml-5 flex flex-[1_1_0]   "}>
               <SideCard liked={liked}/> 
           </div>
       }

    </div>


    </>
  )
}

export default Books