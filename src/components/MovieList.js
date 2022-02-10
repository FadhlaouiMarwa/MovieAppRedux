import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

function MovieList({inputSearch}) {
  const film=useSelector(state=>state.movieReducer.liste)
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
         {film
      ?.filter((movie)=>
      movie.title
      .toUpperCase()
      .includes(inputSearch.toUpperCase())
      )
      .map((el)=>(
      <MovieCard movie={el} key={el.id}/>
  
      ))}

    </div>
  )
}

export default MovieList