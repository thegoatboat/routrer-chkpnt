import React from 'react'
import Card from 'react-bootstrap/Card';
import Rate from './Rate';
import {Link} from 'react-router-dom'

function MovieCard({movie}) {
  return (
    <div className='cards'>
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.description} </Card.Text>
        <button>  <Link to={`/Movielist/${movie.id}`}>{movie.name}</Link>
        </button>
        <Rate rate={movie.rating}/>
      </Card.Body>

    </Card>
    </div>
  )
}

export default MovieCard
