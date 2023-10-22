import React from 'react'
import './App.css'

const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
        <div><p>{movie.Year}</p></div>
        <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
        </div>
        <div>
          <span>{movie.type}</span>
          <p>{movie.Title}</p>
        </div>
    </div>
  )
}

export default MovieCard