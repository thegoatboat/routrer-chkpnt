import React from 'react'
import { useParams } from 'react-router-dom';
import {moviesData} from './MovieData'
import Card from 'react-bootstrap/Card';

const AffichMovie = () => {
    const {ID} =useParams();
    const movie= moviesData.find((el) => el.id === Number(ID))
    console.log(moviesData)
    console.log(movie)

  return (
    
    <div className='AffCard'>
    <Card style={{ width: '18rem' }}>

    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      
    </Card.Body>
    </Card>

    </div>
  )
}

export default AffichMovie
