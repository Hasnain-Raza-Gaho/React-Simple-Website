import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {firebase} from '../config/firebase'




const SignUp = () => {


  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);


  const goSignUp = () => {
   
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((val)=>{
        var snap = val.user;
        console.log(snap.email)
        // console.log(val)


        var obj = {
            name : 'hasnain',
            class : 13,
            email : snap.email,
            uid : snap.uid,
            password : password

        }

        firebase.database().ref('/User').child(snap.uid).set(obj)
    })




    .catch((err)=>{
        console.log(err)
    })
    
  }

  

  


    return (
        <Form className='container'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    <Link to='/' className=' text-decoration-none text-white' onClick={()=>goSignUp()}>SignUp</Link>
  </Button>
 
</Form>
    );
    }

export default SignUp;
