import React from "react";
import { Card,Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route,Link, useRouteMatch,useParams} from "react-router-dom";

const MovieCard = ({movie}) => {
    console.log(movie)
    return (
      <>
     <Card style={{ width: '25rem', height:'53rem'}}>
     <Card.Img variant="top" src={movie.posterUrl} style={{height:'500px'}} />
     <Card.Body>
     <Card.Title>{movie.title}</Card.Title>
     <Card.Text>
     {movie.description}
     <h6>Rating: {movie.rating}</h6>
     </Card.Text>
     </Card.Body>
     <div style={{textAlign:'center', marginBottom:'1.4rem'}}>
     <Link to={`/Trailer/${movie.id}`}> <Button variant="outline-dark">See more</Button></Link>
     </div>
     </Card>
      </>
    );
   };
   export default  MovieCard;