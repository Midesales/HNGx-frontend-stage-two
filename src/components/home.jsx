import React, {useState, useEffect} from 'react'
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


const API_search = 'https://api.themoviedb.org/3/search/movie?api_key=8f2dcc6a6e829c62f51340e3806d306a';

function Home() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const searchMovies = async(e) =>{
        console.log('searching')
    try {
      const Url = `https://api.themoviedb.org/3/search/movie?api_key=8f2dcc6a6e829c62f51340e3806d306a=${query}`;
      const res = await fetch(Url);
      const data = await res.json();
      console.log(data)
      setMovies(data.results)
    } catch (error) {
        console.error('Error searching movies', error);
    }
 }

 const chaneHandler = (e) => {
  setQuery(e.target.value)
 }
  return (
    <section className = 'h-full bg-white'>
        <header style={{ backgroundImage: `url(${Poster})` }} className="object-fit text-white h-fit">
          <div className = 'flex justify-between px-5 lg:px-20 pt-5 items-center'>
              <div className = 'flex items-center lg:gap-5'>
                <img src = {tv} alt="tv" />
                <h2>MovieBox</h2>
              </div>
              <div className='relative flex border border-gray-300 rounded-lg items-center grow max-w-md'>
                <input
                  type='text'
                  placeholder='What do you want to watch'
                  className='grow bg-transparent outline-none p-2 ' name = 'query' value = {query} onChange={chaneHandler}
                />
                <button onClick = {searchMovies} className='absolute right-0 p-2 shrink'>
                  <img src={search} alt='search' className='' />
                </button>
              </div>
              <div className = 'flex gap-5 items-center'>
                <h2>Sign in</h2>
                <img src = {menu} alt="" />
              </div>
             </div>
             <div className = 'px-20 py-28 flex flex-col'>
              <h1 className = 'flex flex-col text-4xl font-semibold '>
                John Wick 3 : <span> Parabellum
                  </span>
              </h1>
              <div className = 'flex gap-8 py-4'>
                <div className = 'flex items-center gap-2'>
                  <img src = {logo} alt="logo"  />
                  <p>86.0 / 100</p>
                </div>
                <div className = 'flex items-center gap-2'>
                  <img src = {tomato} alt="tomato" />
                  <p>97%</p>
                </div>
              </div>
              <div className = 'w-72 text-sm'>
                John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
              </div>
              <button className = 'bg-[#BE123C] flex items-center w-44 px-3 py-1 mt-4 '>
                <img src = {play} alt="play" />
                <h4 className = 'pl-2'>WATCH TRAILER</h4>
              </button>
             </div>
          

      </header>
      <div>
        <MovieBox movies={movies} setMovies={setMovies} />
      </div>
      <footer className = ''>
        <div className = 'flex justify-center pt-10 pb-8  gap-10'>
          <img src ={facebook} alt="" />
          <img src ={instagram} alt="" />
          <img src ={twitter} alt="" /> 
          <img src ={youtube} alt="" />
        </div>
        <div className = 'text-[#111827] flex justify-center gap-8 font-bold '>
          <h2>Conditions of Use</h2>
          <h2>Privacy & Policy</h2>
          <h2>Press Room</h2>
        </div>
        <p className = 'flex justify-center text-[#111827] p-4'>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
      </footer>
    </section>
)}

export default Home