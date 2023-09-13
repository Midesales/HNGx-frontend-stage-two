import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './sidebar';



const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8f2dcc6a6e829c62f51340e3806d306aa';

function Moviedetails() {
    const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams(); // Get the movie ID from the URL

  useEffect(() => {
    axios.get(`${API_URL}?api_key=${API_KEY}`)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]); // Fetch data whenever the ID parameter changes

  return (
    <div className="overflow-y-auto h-screen rounded-lg bg-indigo-50 flex">
      <Sidebar />
      <div className="flex-grow w-full h-screen">
        <div key={movieDetails.id} data-testid='movie-card' className = 'grow text-middle pt-10' >
          
            {/* <img src={API_images + poster_path} alt="movie-poster" data-testid='movie-poster' /> */}
            <h2 data-testid='movie-title' className = 'font-bold text-lg'>{movieDetails.title}</h2>
            <h4 data-testid='movie-release-date' className = 'text-[#9CA3AF]'>
              Release Date: {movieDetails.release_date}</h4>
        </div>
        hi
      </div>
    </div>
  );
}

export default Moviedetails;
