import React, { Component } from 'react';
import {Navbar, Nav, Container, FormControl, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Navbar2 extends Component {
    render() {
        return (
          <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand to="/">OLX Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                 <Link to='/' className=' text-decoration-none text-black-50 px-3 mt-1 text-uppercase py-2' >Home</Link>
                 <Link to='/services' className=' text-decoration-none text-black-50 px-3 mt-1 text-uppercase py-2' >Services</Link>
                 {/* <Link to='/services' className=' text-decoration-none text-black-50 px-3 mt-1 text-uppercase py-2' >Upload Item</Link> */}
              </Nav>
            <Form className="">
        <Button variant="success" className='mx-3 my-1' > <Link to='/signin' className=' text-decoration-none text-white px-3 mt-1 text-uppercase p-2' >Sign In</Link></Button>
      </Form>
      
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
    }
}

export default Navbar2;
