import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  return (
    <div className='navbar'>
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#App">Movie APP</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Movies</Nav.Link>
        <Nav.Link href="#features">Series</Nav.Link>
        <Nav.Link href="#pricing">Anime</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
      
    </div>
  )
}

export default NavBar
