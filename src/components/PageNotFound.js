import React from 'react';
import { Link } from "react-router-dom"


const Pagenotfound = () => {
    return (
        <div className='container m-5'>
            <h1 className='text-danger fw-bolder'>404 Error:</h1>
            <h2 className='fw-bolder'>Sorry This Page Not Found!</h2>
            Go to <Link to='/' className=' text-decoration-none '>Home</Link> Now
        </div>
    );
}

export default Pagenotfound;
