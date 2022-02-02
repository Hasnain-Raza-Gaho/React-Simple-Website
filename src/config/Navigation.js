import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/footer';
import Services from '../components/Services';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import PageNotFound from '../components/PageNotFound';
import { Route, Routes } from "react-router-dom";





class Navigation extends Component {
  render() {
    return (
      <div>
<Navbar name='OLX Dummy Site'/>

        <Routes>
          <Route path='/' element={<Slider/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>


{/* <Footer/> */}
      </div>
    );
  }
}

export default Navigation;
