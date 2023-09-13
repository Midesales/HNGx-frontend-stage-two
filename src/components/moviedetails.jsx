import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './sidebar';
import star from '../assests/Star.png'



const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8f2dcc6a6e829c62f51340e3806d306a';
const API_images = 'https://image.tmdb.org/t/p/w200';




function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}min`;
}

function formatAsUTCDate(dateString) {
  const date = new Date(dateString);
  return date.toUTCString();
}

function Moviedetails() {
  const [movie, setMovie] = useState({});
  const [posterUrl, setPosterUrl] = useState("");
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);


  //Adding movi to favourite
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
        const posterPath = response.data.poster_path;
        if (posterPath) {
          setPosterUrl(`${API_images}${posterPath}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  return (
    <div className="overflow-y-auto h-screen rounded-lg bg-indigo-50 flex">
      <Sidebar />
      <div className="flex-grow w-full h-screen p-10">
        <h4 className="font-bold text-lg text-[#BE123C] p-2 flex items-center justify-center">
          {showModal && "Movie added to favourite"}
        </h4>
        <div className="w-full">
          <img src={posterUrl} alt="" className="object-fill" />
        </div>

        <div className="flex gap-10">
          <h2 data-testid="movie-title" className="font-bold text-lg">
            Title: {movie.title}
          </h2>
          <button onClick={movieAdded} className="hover:bg-yellow-200">
            <img src={star} alt="favourite" className="bg-white" />
          </button>
        </div>
        <h4 data-testid="movie-runtime" className="text-[#9CA3AF]">
          Runtime: {convertMinutesToHoursAndMinutes(movie.runtime)}
        </h4>
        <h4 data-testid="movie-release-date" className="text-[#9CA3AF]">
          Release Date (UTC): {formatAsUTCDate(movie.release_date)}
        </h4>
        <h4 data-testid="movie-overview" className="font-bold">
          Overview:
          <span className="font-semibold">{movie.overview}</span>
        </h4>
      </div>
    </div>
  );
}

export default Moviedetails;
