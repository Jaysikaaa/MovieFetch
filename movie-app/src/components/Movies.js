import React from 'react'
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const {movie} = useGlobalContext();


  return (
    <>
    <section className='movie-page '>
        <div className='grid grid-4-col'>
      {movie.map((curMovie) => { 
        const {Poster, Title, imdbID} = curMovie
        const movieName = Title.substring(0, 15);
        return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className='card'>
                    <div className='card-info'>
                    <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt={imdbID}></img>
                    </div>
                </div>
            </NavLink>
        )
      })}
      </div>
      </section>
    </>
  )
}

export default Movies
