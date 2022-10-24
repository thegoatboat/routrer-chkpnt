import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movielist,search,SearchRating}) {
  return (
    <div>
    <div className='movieListContainer'>{
      movielist.filter(el=>el.name.toUpperCase().includes(search.toUpperCase().trim() )&& el.rating > SearchRating)
      .map((el,key)=>  <MovieCard key={el.id} movie={el} />)
      
    }


    </div>


    </div>
   
  )
}

export default MovieList
