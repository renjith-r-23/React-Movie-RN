import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com/?apikey=d492ff0c'

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setmovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => {
                return <MovieCard movie={movie} />
              })}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )


      }


    </div>
  );
}

export default App;


