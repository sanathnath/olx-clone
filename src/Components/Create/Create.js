import React, { Fragment, useContext, useState } from 'react'
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'

import './Create.css'; 
import { AuthContext } from '../../store/Context'
import { colref_prod, storage } from '../../firebase/config'
import { addDoc } from 'firebase/firestore';
import { CategoryContext } from '../../store/CategoryContext';

function Create() {

  const {User} = useContext(AuthContext);
  const [Name, setName] = useState('');
  
  // const [Category, setCategory] = useState('');
  const [Price, setPrice] = useState('');
  const [Image, setImage] = useState(null);
  const  navigate = useNavigate('')
  const date = new Date()
  const {Catgry} = useContext(CategoryContext)
  console.log(Catgry);

  const handleSubmit = ()=>{
    const storageRef = ref(storage, `image/${Image.name}`);

    navigate('/');

    uploadBytes(storageRef,Image).then((snapshot)=>{
      getDownloadURL(ref(storageRef)).then((url)=>{

        addDoc(colref_prod, {
          Name,
          Category:Catgry,
          Price,
          url,
          userId:User.uid,
          createdAt:date.toDateString()
        })
      })
    })  
  }
    return (
        <Fragment>
 
            <card>
            <div className="centerDiv">
              <h4>{Catgry}</h4>
            <br />
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
            
            <br />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
             className="input"
             type="number"
             id="fname"
             name="Price"
             onChange={(e)=>{
               setPrice(e.target.value)
             }}
                />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={ Image ? URL.createObjectURL(Image) : ''}></img>
          
            <br />
            <input type="file"
             onChange={(e)=>{
              setImage(e.target.files[0])
             }}
             />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
            </card>
        </Fragment>
    )
}

export default Create
