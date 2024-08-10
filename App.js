import './App.css';
import React, {useState} from 'react';
import Nav from './Nav.jsx';

// Title and Header
function App(props) {
  return (
    <div className='App'>
      <h1>Barack Obamas' Personal Blog</h1>
      <h2> </h2>
      <Nav />
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
      alt="Barack Obama" width= {400} height={400}
    
    />
    
      
    </div>
      
    
  );
}

export default App;

