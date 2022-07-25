import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'

import './Login.css'
import Logo from '../../olx-logo.png'
import { Link } from 'react-router-dom'

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')

    const auth = getAuth();
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(Email);
        signInWithEmailAndPassword(auth,Email,Password).then(()=>{
            navigate("/")
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    
    return (
        <div>
            <div className="loginParentDiv">
                <img src={Logo} width="200px" height="200px" alt="" />
                <form onSubmit={handleLogin}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input className='input'
                     type="email"
                     id='fname'
                     name='email'
                     value={Email}
                     onChange={(e)=>{
                         setEmail(e.target.value)
                     }} />
                     
                     <br />
                     <label htmlFor="lname">Password</label>
                     <br />
                     <input type="password"
                      className="input"
                      id='lname'
                      name='password'
                      value={Password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                       />
                      <br />
                      <br />
                      <button type="submit" >Login</button>
                </form>
                <Link className='link' to='/signup'>Signup</Link>
            </div>
        </div>
    )
}

export default Login
