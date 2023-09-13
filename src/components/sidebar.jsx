import React from 'react'
import Home from '../assests/Home.png';
import tv from '../assests/tv.png';
import Movie from '../assests/Movie Projector.png';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function Sidebar() {
  return (
    <div className="z-50 rounded-r-3xl rounded-b-3xl   hidden md:flex lg:flex bg-white px-4  pr-6  h-screen flex-col border-r border-gray-200 pt-5 pb-4 w-1/4 ">
      <div className="flex align-content-center m-2">
        <img
          className="w-10 p-1 place-self-center h-10 rounded-full bg-white"
          src={tv}
         
        />
        <p className="align-self-center pb-5 text-lg font-semibold text-black mx-6 mt-4">
          MovieBox
        </p>
      </div>

      <div className="mt-5  flex-grow flex flex-col ">
        <nav className="flex-1 px-2 py-8 space-y-1 " aria-label="Sidebar">
         
            <a
              href='/'
              className='flex items-center pb-10 hover:bg-[#BE123C1A] hover:text-[#BE123C]'
            >
              <img src = {Home}
                className='p-4'
              />
              <span className="flex-1 hidden lg:flex md:flex">Home</span>
            </a>
             <div  className={classNames(
                      Movie
                        ? "bg-[#d8c9cdee] text-[#BE123C] font-bold"
                        : "text-white hover:bg-gray-50 hover:text-gray-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md "
                    )}>
                <img src = {Movie}
                className='p-4'
              />
              <span className="flex-1 hidden lg:flex md:flex">Movie</span>
             </div>
              
            
        </nav>
    </div>
    </div>

  )
}

export default Sidebar