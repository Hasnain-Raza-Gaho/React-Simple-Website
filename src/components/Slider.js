import React, { Component } from 'react';
import img1 from './img (1).png'
import img2 from './img (2).png'
import img3 from './img (3).png'
import Data from './data'

class Slider extends Component {
    render() {
        return (
            <div>
                      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={img1} className="d-block w-100" alt="Laptop" />
            
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={img2} className="d-block w-100" alt="Laptop" />
            
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Laptop" />
            
          </div>
        </div>
        <button className="bg-warning opacity-25 carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="bg-warning opacity-25 carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Data/>
            </div>
        );
    }
}

export default Slider;
