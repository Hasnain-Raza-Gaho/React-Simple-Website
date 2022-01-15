 import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.min';
 import Navbar from './components/Navbar';
 import Slider from './components/Slider';
 import Footer from './components/footer';
 import Data from './components/data';


 
 class App extends Component {
   render() {
     return (
       <div>
       <Navbar name='Raza Site' />
<Slider/>
<Data/>
<Footer/>







       </div>
     );
   }
 }
 
 export default App;
 