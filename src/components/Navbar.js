import React, { Component } from 'react';
import {Navbar, Nav, Container, Form, Button} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

class Navbar2 extends Component {
    render() {
        return (
          <Navbar bg="light" expand="lg">
          <Container>
          <NavLink className=' text-decoration-none text-success fs-5 fw-bold   text-uppercase' to='/'>OLX Site</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                 <NavLink to='/'  className=' mx-3 text-decoration-none text-black-50  text-uppercase py-2' >Home</NavLink>
                 <NavLink to='/services' className=' text-decoration-none text-black-50  text-uppercase py-2' >Services</NavLink>
              </Nav>
            <Form className="">
        <Button variant="success" className='mx-3 my-1' > <Link to='/signin' className=' text-decoration-none text-white px-3 mt-1 text-uppercase p-2' >Sign In</Link></Button>
        <NavLink to='/uploaditem' className=' text-decoration-none text-black-50  text-uppercase' >Upload Item</NavLink>
      </Form>
      
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
    }
}

export default Navbar2;
