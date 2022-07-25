import React,{ useEffect,useContext } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged,getAuth } from 'firebase/auth'
import Post from './store/PostContext';

import './App.css';

  // ---------Pages------------
import Home from './Pages/Home';
import CreatePage from './Pages/Create';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import ViewPost from './Pages/ViewPost';
import { AuthContext,FirebaseContext } from './store/Context';
import Adcategory from './Pages/Adcategory';
import Category from './store/CategoryContext';
import Search from './store/SearchContext';
import Products from './Pages/Products';
import Profile from './Pages/Profile';


function App() {
  const {app} = useContext(FirebaseContext)
  const authInstance = getAuth(app)
  
  const {setUser} = useContext(AuthContext)

  useEffect(() => {
    onAuthStateChanged(authInstance,(User)=>{
      setUser(User);
    })
    
  })
  return (
    <div className="App">
      <Post>
      <Category>
        <Search>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/view" element={<ViewPost />} />
            <Route path="/category" element={<Adcategory />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/items" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          </BrowserRouter>
        </Search>
      </Category>
      </Post>
    </div>
  );
}

export default App;
