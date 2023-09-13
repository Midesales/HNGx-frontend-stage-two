import React, {useState} from 'react'
import Home from '../assests/Home.png';
import tv from '../assests/tv.png';
import Movie from '../assests/Movie Projector.png';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function Sidebar() {
  const [toggleon, setToggleOn] = useState(false);
  return (
    <div>

      {/* //SMALL SCREENS */}
      <div className="absolute m-5 lg:hidden md:hidden">
        <button className="cursor-pointer" onClick={() => setToggleOn(true)}>
          <div className="w-6 h-[2px] bg-gray-700 mb-2"></div>
          <div className="w-6 h-[2px] bg-gray-700 mb-2"></div>
          <div className="w-6 h-[2px] bg-gray-700"></div>
        </button>
      </div>

      <div className={toggleon === false ? "hidden" : ""}>
        <div className="absolute z-50 bg-[#BE123C] w-5/6 h-screen flex-col border-r border-gray-200 pt-2 pb-4 ">
          <div className="flex justify-end px-4 text-2xl text-white w-full">
            <div
              onClick={() => setToggleOn(false)}
              className="justify-end cursor-pointer"
            >
              {" "}
              x{" "}
            </div>
          </div>

          <div className=" flex align-items-center m-2 w-fit ">
            <img
              className="w-10 p-1 place-self-center h-10 rounded-full bg-white"
              src={tv}
              alt="movieboxlogo"
            />
            <p className="lign-self-center pb-5 text-lg font-semibold text-white mx-6 mt-4 ">
              MovieBox
            </p>
          </div>

          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 py-8 space-y-1 " aria-label="Sidebar">
              <a
                href="/"
                className="flex items-center pb-10 hover:bg-[#BE123C1A] hover:text-[#BE123C]"
              >
                <img src={Home} alt="homelogo" className="p-4" />
                <span className="flex-1 text-white  lg:flex md:flex">Home</span>
              </a>
              <div
                className={classNames(
                  Movie
                    ? "bg-white text-red-700 font-bold"
                    : "text-white hover:bg-gray-50 hover:text-gray-600",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md "
                )}
              >
                <img src={Movie} alt="movielogo" className="p-4" />
                <span className="flex-1 text-black  lg:flex md:flex">
                  Movie
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* LARGE SCREENS */}
      <div className="z-50 rounded-r-3xl rounded-b-3xl   hidden md:flex lg:flex bg-white px-4  pr-6  h-screen flex-col border-r border-gray-200 pt-5 pb-4 ">
        <div className="flex align-content-center m-2">
          <img
            className="w-10 p-1 place-self-center h-10 rounded-full bg-white"
            src={tv}
            alt="movieboxlogo"
          />
          <p className="align-self-center pb-5 text-lg font-semibold text-black mx-6 mt-4">
            MovieBox
          </p>
        </div>

        <div className="mt-5  flex-grow flex flex-col ">
          <nav className="flex-1 px-2 py-8 space-y-1 " aria-label="Sidebar">
            <a
              href="/"
              className="flex items-center pb-10 hover:bg-[#BE123C1A] hover:text-[#BE123C]"
            >
              <img src={Home} alt="homelogo" className="p-4" />
              <span className="flex-1 hidden lg:flex md:flex">Home</span>
            </a>
            <div
              className={classNames(
                Movie
                  ? "bg-[#d8c9cdee] text-[#BE123C] font-bold"
                  : "text-white hover:bg-gray-50 hover:text-gray-600",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md "
              )}
            >
              <img src={Movie} alt="movielogo" className="p-4" />
              <span className="flex-1 hidden lg:flex md:flex">Movie</span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar