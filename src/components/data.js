import React , {useState} from 'react';
import {Firebase,Storage} from '../config/firebase'

const Data = () => {

    const [image, setImage] = useState(null);
   

        const handleChange = (e) => {
            if (e.target.files[0]) {
                setImage(e.target.files[0])
            }
            console.log(e.target.files[0])
        }

   

    const handleUpload = () => {
        const uploadTask = Storage.ref('images').child(`${image.name}`).put(image);
        uploadTask.on("state_changed",
        snapshot => {},
        error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className='container'>
                <p>Sell Your Olx Here</p>
                <input type="file" onChange={(e) => handleChange(e)} accept="image/*" />
                <button onClick={()=>handleUpload()}>Upload</button>
            </div>

            <div className="container">


            </div>
        

        </div>
    );
}

export default Data;
