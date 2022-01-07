
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [Mode, setMode] = useState('light');// whether dark mode is enable or not
  const toggelMode = () => {

    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d1536';//#212529
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';//#fff8e8
       }
  }
  return (
    <>
      <Navbar usingprops="txt.chngr" mode={Mode} toggelMode={toggelMode} />
      <div className="container my-3">
        <Form heading="Enter your text for analysing" mode={Mode} />
      </div>
      <div>
        {/* <h2>You can enable dark mode here</h2> */}
        {/* <About /> */}

      </div>
    </>
  );
}

export default App;
