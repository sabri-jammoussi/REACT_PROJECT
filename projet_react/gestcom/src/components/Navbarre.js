import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
export default function Navbarre() {
  return (
    <Navbar bg="dark" variant="dark"expand="lg">
    <Container fluid>
      {/* <Navbar.Brand href="#">MenuRestaurant</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link}to="/Menu">Menu Restaurant</Nav.Link>
          <NavDropdown title="Pizza Italian" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to ="/articleL">Liste des Pizza</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Sandwich" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link}to="/categorieL">List des Sandwich</NavDropdown.Item>
            
           
          </NavDropdown>
          <NavDropdown title="Supplement" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to ="/souscategorieL">List-Supplement</NavDropdown.Item>
          
          </NavDropdown>
          <NavDropdown title="Boisson" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to ="/listboi">Boisson</NavDropdown.Item>
          
          </NavDropdown>
         
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
