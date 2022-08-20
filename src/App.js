import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './store/PostContext';

import './App.css';

  // ---------Pages------------
import Home from './Pages/Home';
import CreatePage from './Pages/Create';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import ViewPost from './Pages/ViewPost';
import Adcategory from './Pages/Adcategory';
import Category from './store/CategoryContext';
import Search from './store/SearchContext';
import Products from './Pages/Products';
import Profile from './Pages/Profile';
import EditPost from './Components/EditPost/EditPost';


function App() {
  

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
            <Route path="/view/:prodid" element={<ViewPost />} />
            <Route path="/category" element={<Adcategory />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/items" element={<Products />} />
            <Route path="/profile/:userid" element={<Profile />} />
            <Route path="/edit/:prodid" element={<EditPost />} />
          </Routes>
          </BrowserRouter>
        </Search>
      </Category>
      </Post>
    </div>
  );
}

export default App;
