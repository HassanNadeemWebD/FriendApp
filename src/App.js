
import './App.css';
import Navbar from './components/Navbar'
import Textfield from './components/Textfield';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {

      setmode('dark');
      
    }
    else{
      setmode('light');
    }
  }

  return (
    <>
      <Navbar title='CodersPride </>' about='About'onClick={toggleMode} />
      <div className="container my-5">
        <Textfield heading='Enter Text to Analyze' />
      </div>
    </>
  );
}

export default App;
