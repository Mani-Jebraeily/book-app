import React from 'react'

function Layout({children}) {
  return (
    <>
    <header className='w-[1000px]  p-6 mb-[80px] box-border text-white   bg-[#303030] rounded-2xl flex justify-between  items-center'>
        <h3 className='text-3xl'>Book App</h3>
        <p>
            <a href="https://github.com/Mani-Jebraeily"
            className='text-[#6552f4] text-[1.1rem] font-semibold pr-1 '
            >Mani Jebraeily</a>
            | React.js Full Course
        </p>
    </header>
    {children}

    <footer className='w-[1000px]  p-5 text-white  mt-20 box-border   bg-[#303030] rounded-2xl flex justify-center  items-center'>
        <p className=''>Developed by Mani with ❤️</p>
    </footer>
    </>
  )
}

export default Layout