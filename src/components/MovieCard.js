import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { DeleteMovie } from '../redux/actions/action'

function MovieCard({movie}) {
  const dispatch=useDispatch()
  return (
    <div>
       <Card style={{ width: '18rem', height:'35rem' }}>
  <Card.Img style={{ width: 286, height:400 }} variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title style={{display:"flex",justifyContent:"center"}}>{movie.title}</Card.Title>
    <Card.Text style={{display:"flex",justifyContent:"center",fontFamily:"fantasy"}}>{movie.rate}</Card.Text>
  </Card.Body>
  <Button onClick={()=>dispatch(DeleteMovie(movie.id))}>Delete</Button>
</Card>
    </div>
  )
}

export default MovieCard