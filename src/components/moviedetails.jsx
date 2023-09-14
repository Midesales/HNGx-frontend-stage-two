import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './sidebar';
import star from '../assests/Star.png'
import play from '../assests/Play (1).png'


const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8f2dcc6a6e829c62f51340e3806d306a';
const API_images = 'https://image.tmdb.org/t/p/w200';





const  formatAsUTCDate  = (dateString)  =>{
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
}

function Moviedetails() {
  const [movie, setMovie] = useState({});
  const [posterUrl, setPosterUrl] = useState("");
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);


  //Adding movies to favourite
  const movieAdded = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}${id}?api_key=${API_KEY}`)
      .then((response) => {
        setMovie(response.data);

        // Construct the poster image URL
        const backdropPath = response.data.backdrop_path;
        if (backdropPath) {
          setPosterUrl(`${API_images}${backdropPath}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  return (
    <div className="overflow-y-auto h-screen rounded-lg bg-indigo-50 flex">
      <Sidebar />
      <div className="flex-grow w-full h-screen p-10 md:p-4 lg:p-4">
        <h4 className="font-bold text-lg text-[#BE123C] p-2 flex items-center justify-center">
          {showModal && "Movie added to favourite"}
        </h4>
        <div
          style={{ backgroundImage: `url(${posterUrl})` }}
          className="bg-cover bg-no-repeat min-h-[60vh] text-white flex flex-col items-center justify-center rounded-xl">
            <img src = {play} alt="play" className='p-2 bg-white bg-opacity-50 rounded-full' />
            <p className = 'font-bold text-lg p-2'>Watch Trailer</p>
          </div>
        <div className="p-3">
          <div className="flex gap-10">
            <h2 className="font-bold text-lg">
              Title: <span data-testid="movie-title">{movie.title}</span>
            </h2>
            <button onClick={movieAdded} className="hover:bg-yellow-200">
              <img src={star} alt="favourite" className="bg-white" />
            </button>
          </div>
          <h4 className="text-[#9CA3AF]">
            Runtime:
            <span data-testid="movie-runtime">{movie.runtime}mins</span>
          </h4>
          <h4 className="text-[#9CA3AF]">
            Release Date (UTC):
            <span data-testid="movie-release-date">
              {formatAsUTCDate(movie.release_date)}
            </span>
          </h4>
          <h4 className="font-bold">
            Overview:
            <span data-testid="movie-overview" className="font-semibold">
              {movie.overview}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Moviedetails;
