import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


function Add({addHandler}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,settitel]= useState(" ")
  const [description,setdescription]= useState(" ")
  const [imgUrl,setimgUrl]= useState(" ")
  const [rate,setrate]= useState(" ")
  const movieadd=()=>{
    addHandler({
    id: Math.random(),
    image:imgUrl,
    rating: rate,
    name: title,
    type: "Action | Crime",
    description:description
  })
  handleClose()
  }


  return (
    <div>
    <Button variant="primary" onClick={handleShow} className='addbutton'>
        Add a movie
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add your movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie titel</Form.Label>
        <Form.Control type="text" placeholder="Enter movie titel" onChange={(e)=>settitel(e.target.value)}/>
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="description" onChange={(e)=>setdescription(e.target.value)}/>
        <Form.Label>Poster URL</Form.Label>
        <Form.Control type="text" placeholder="Poster url" onChange={(e)=>setimgUrl(e.target.value)}/>
        <Form.Label>Movie rate</Form.Label>
        <Form.Control type="text" placeholder="movie rate" onChange={(e)=>setrate(e.target.value)}/>
        
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={movieadd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      
  );
}


export default Add
