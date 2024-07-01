import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Nav from './Nav.jsx';

// Title and Header
export function App(props) {
  return (
    <div className='App'>
      <h1>Obamas' Blog</h1>
      <h2>My Life, tutorials and reviews!</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <Nav />
    </div>
  );
}

export function Profile() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
      alt="Barack Obama"
    />
  );
}


function Counter() {
  
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;