import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './components/movie';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman").then((result) => {
      result.json().then((res) => {
        console.log(res)
        setMovies(res)
      })
    })
  }, []);


  return (
    <div>
      <Movie movies={movies} />
    </div>
  );
}

export default App;
