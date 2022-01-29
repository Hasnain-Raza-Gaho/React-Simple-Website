import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'




const Signin = () => {
    return (
        <Form className='container'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    <Link to='/' className=' text-decoration-none text-white'>Login</Link>
  </Button>
  <p>Dont Have Create Accout ? <Link to='/signup'>Sign Up</Link> </p>
</Form>
    );
}

export default Signin;
