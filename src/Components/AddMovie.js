import { FormControl,Container,Form,Button,Col} from "react-bootstrap";
import { useState } from 'react';
import { useRef } from 'react';
import '../App.css';
const AddMovie = () => {
const[bool, setbool]=useState(false)
    const handlesubmit=()=> {  
        setbool(true)
    }
    return (
        <Container >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter the movie title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter the movie description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicURL">
          <Form.Label>Poster Url</Form.Label>
          <Form.Control type="text" placeholder="Enter the poster Url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="text" placeholder="Enter the movie rating" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
  
    );
   };
   export default  AddMovie;