import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import avatar from '../src/components/images/avatar.png';



function App() {
  return (
    <div>
      <Navbar />
      <h1>Front End Web Developer</h1>
      <h2>Hello, My name is Madeline</h2>
      <img src={avatar} alt="avatar of me" class="img-thumbnail"></img>
       
    </div>
  );
}

export default App;
