import React, { useEffect, useState } from 'react';
import './Css/Banner.css'
import axios from '../helpers/axios';
import requsests from '../helpers/requsests';

const Banner = () => {
   const [movies, setMovies] = useState([]);

   useEffect(()=>{
    const fetchData = async()=>{
      const request = await axios.get(requsests.fetchNetflixOriginals);
      
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;

    };
    fetchData();
   }, []);
   console.log(movies);
   function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + "..." :string;
   }
  return (
    <header className='banner' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div >
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
          {truncate(movies?.overview,150)}
        </h1>
      </div>
      <div className='banner--fadebottom' />
    </header>
  )
}

export default Banner