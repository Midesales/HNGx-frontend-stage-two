import React, {useState} from 'react'
import axios from 'axios'
import Poster from '../assests/Poster.png';
import tv from '../assests/tv.png'
import search from '../assests/Search.png';
import menu from '../assests/Menu.png';
import logo from '../assests/Logo.png';
import tomato from '../assests/tomato.png';
import play from '../assests/Play.png'
import MovieBox from './movie';
import facebook from '../assests/facebook.png';
import twitter from '../assests/instagram.png';
import youtube from '../assests/youtube.png';
import instagram from '../assests/twitter.png'



function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorResult, setErrorResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //API SEARCH
  const searchMovies = async (e) => {
    if (query === "") {
      setIsLoading(false);
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 1000);
      return;
    }
    
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: query,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjJkY2M2YTZlODI5YzYyZjUxMzQwZTM4MDZkMzA2YSIsInN1YiI6IjY0ZmYwMDhlZmZjOWRlMGVlMjA4OGMyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PuuvxLaFScmMmH91o_hk3teLxjXh_VlyiOVmUcmqrB4",
        },
      };
      
      axios
        .request(options)
        .then(function (response) {
          const movies = response.data.results;
          if (movies.length === 0) {
            setIsLoading(false)
            setErrorResult(true);
            setTimeout(() => {
              setErrorResult(false);
            }, 1000);
          } else {
            setMovies(movies);
          }
        })
        .catch(function (error) {
          console.error("Error searching movies");
        });
    } catch (error) {
      setIsLoading(false)
      console.log("Error searching movies");
    }finally {
    setIsLoading(false);
  }}

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <section className="h-full bg-white">
      <header
        style={{ backgroundImage: `url(${Poster})` }}
        className="object-cover text-white bg-center h-fit bg-no-repeat p-4"
      >
        <div className="flex flex-col py-4 px-5 gap-4 justify-between  lg:flex-row  items-center">
          <div className="flex items-center gap-2">
            <img src={tv} alt="tv" />
            <h2>MovieBox</h2>
          </div>
          <div className="relative flex border border-gray-300 rounded-lg w-full max-w-md  items-center grow focus:bg-slate-400">
            <input
              type="text"
              placeholder="What do you want to watch"
              className="grow bg-transparent outline-none p-2 "
              name="query"
              value={query}
              onChange={changeHandler}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchMovies();
                }
              }}
            />
            <h4 className="absolute -bottom-10 left-10 py-1 px-2 ">
              {errorMessage && "Enter a value"}
            </h4>
            <h4 className="absolute -bottom-10 left-10 py-1 px-2 ">
              {errorResult && "No result found"}
            </h4>
            <button
              onClick={searchMovies}
              className="absolute right-0 p-2 shrink ouline:none"
            >
              <img src={search} alt="search" className="" />
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <h2>Sign in</h2>
            <img src={menu} alt="" />
          </div>
        </div>
        <div className="px-4 py-10 lg:px-20 flex flex-col">
          <h1 className="flex flex-col lg:text-4xl font-semibold ">
            John Wick 3 : <span> Parabellum</span>
          </h1>
          <div className="flex gap-8 py-4">
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <img src={logo} alt="logo" />
              <p>86.0 / 100</p>
            </div>
            <div className="flex flex-col lg:flex-row  items-center gap-2">
              <img src={tomato} alt="tomato" />
              <p>97%</p>
            </div>
          </div>
          <div className="md:w-72 lg:w-72 text-sm">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </div>
          <button className="bg-[#BE123C] flex items-center w-44 px-3 py-1 mt-4 ">
            <img src={play} alt="play" />
            <h4 className="pl-2">WATCH TRAILER</h4>
          </button>
        </div>
      </header>
      <div>
        
          <MovieBox movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} />
        
      </div>
      <footer className="flex items-center flex-col">
        <div className="flex flex-row justify-center pt-10 pb-8  gap-10">
          <a href="https://www.facebook.com/ayomide.adeagbo.1">
            <img src={facebook} alt="facebook" className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/ayoade_mide">
            <img src={instagram} alt="instagram" className="h-8 w-8" />
          </a>
          <a href="https://twitter.com/ayoade_mide">
            <img src={twitter} alt="twitter" className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvbSUf0aqqwbkU8oUzH2iVw"
          >
            <img src={youtube} alt="youtube" className="h-8 w-8" />
          </a>
        </div>
        <div className="text-[#111827] flex flex-col md:flex-row lg:flex-row  justify-center gap-8 font-bold ">
          <h2>Conditions of Use</h2>
          <h2>Privacy & Policy</h2>
          <h2>Press Room</h2>
        </div>
        <p className="flex justify-center text-[#111827] p-4">
          &copy; 2023 MovieBox by Adeagbo Ayomide
        </p>
      </footer>
    </section>
  );
}

export default Home