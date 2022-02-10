import React , {useState} from 'react';
import {firebase,Storage} from '../config/firebase'

const UploadItem = () => {

    const [image, setImage] = useState();
    const [uploadBtn, setUploadBtn] = useState(true)
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [pType, setPtype] = useState();
    const [url , seturl] = useState()
    const [obj, setobj] = useState()
    const [key, setkey] = useState()


    const cities = [
        {
          label: "Karachi",
          value: "Karachi",
        },
        {
          label: "Hyderabad",
          value: "Hyderabad",
        },
        {
          label: "Kotri",
          value: "Kotri",
        },
        {
          label: "Jamshoro",
          value: "Jamshoro",
        },
        {
          label: "Sukkur",
          value: "Sukkur",
        },
        {
          label: "Nawabshah",
          value: "Nawabshah",
        },
        {
          label: "Larkana",
          value: "Larkana",
        },
      ];

    const productType = [
        {
          label: "House",
          value: "House",
        },
        {
          label: "Property",
          value: "Property",
        },
        {
          label: "Vehicle",
          value: "Vehicle",
        },
        {
          label: "Mobile",
          value: "Mobile",
        }
      ];
   

        const handleChange = (e) => {
            if (e.target.files[0]) {
                setImage(e.target.files[0])
            }
            console.log(e.target.files[0])
        }

   

    const handleVerify = () => {
        const uploadTask = Storage.ref(`OLX/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
      snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          console.log(progress)
if (progress === 100){
  setUploadBtn(false)
}
          },
          error => {
            console.log(error);
          }
          ,
          () => {
            firebase.storage()
              .ref(`OLX`)
              .child(`${image.name}`)
              .getDownloadURL()
              .then(url => {
                  seturl(url)
                });

                console.log(url)
                console.log(image.name)
        }
    
    
    


    
          
        );

        var key1 = firebase.database().ref((`OLX`)).push().key;
        console.log(key1)
        setkey(key1)
        console.log(key)
        
      }
      const handleUpload = ()=>{
       var obj1 = {
         pname:name,
         city : city,
         url:url,
         productType: pType
     }
     setobj(obj1)

firebase.database().ref(`OLX/${key}`).set(obj)
console.log(obj)

      }




    return (
        <div>
            <form className='container mb-2'>
  <div className="form-group mb-2">
    <label htmlFor="formGroupExampleInput">Name of Product</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter here Name of you product" onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="form-group mb-2">
    <label htmlFor="formGroupExampleInput">City</label>
    <select className="form-control form-control-sm" onChange={(e)=>setCity(e.target.value)}>

          {cities.map((city,i) => (
              <option key={i} value={city.value}>{city.label}</option>
            ))}
</select>
  </div>

  <div className="form-group mb-2">
    <label htmlFor="formGroupExampleInput">Product Type</label>
    <select className="form-control form-control-sm" onChange={(e)=>setPtype(e.target.value)} >

          {productType.map((p,i) => (
              <option key={i} value={p.value}>{p.label}</option>
            ))}
</select>
  </div>
    </form>

            <div className='container mt-3'>
                <input type="file" onChange={(e) => handleChange(e)} accept="image/*" />
               { uploadBtn ?
               <button className='btn btn-warning btn-lg btn col-12 my-3' onClick={()=>handleVerify()}>Verify your Item</button>
               : 
               <button className='btn btn-warning btn-lg btn col-12 my-3'  onClick={()=>handleUpload()}>Upload</button>
              }
            </div>
        

        </div>
    );
}

export default UploadItem;
