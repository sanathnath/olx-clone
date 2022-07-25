import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import { FirebaseContext } from '../../store/Context'
import { getAuth,createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { addDoc } from 'firebase/firestore'
import { colref_user } from '../../firebase/config'

import './Signup.css'
import Logo from '../../olx-logo.png'


function Signup() {
  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')

  // const {app} = useContext(FirebaseContext)
  const auth = getAuth();
  const navigate = useNavigate('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword( auth,Email,Password).then((cred)=>{
      
      updateProfile(auth.currentUser,{displayName:Username}).then(()=>{
        addDoc(colref_user, {
          id: cred.user.uid ,
          username: Username ,
          phone: Phone
        }).then(()=>{
          navigate('/login')
        })
      })
      console.log(cred.user);

    }).catch((err)=>{
      console.log(err.message);
    })
  }
    return (
        <div>
            <div className="signupParentDiv">
                <img src={Logo} width="200px" height="200px" alt="" />
                <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={Username}
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={Phone}
            onChange={(e)=>{setPhone(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button type="submit" >Signup</button>
        </form>
        <Link to='/login' className='link'>Login</Link>
            </div>
        </div>
    )
}

export default Signup
