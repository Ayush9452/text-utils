import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setmode] = useState("light")
  const [alert,setalert] = useState(null)

  const togglemode = () =>{
      if(mode === 'light')
      {
          setmode('dark');
          document.body.style.backgroundColor = '#091828'
          showalert('Dark Mode Enabled','success')
        }
        else
        {
          setmode('light');
          document.body.style.backgroundColor = 'white'
          showalert('Light Mode Enabled','success')
      }
  }
  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Text Analyzer" mode={mode} showalert={showalert}/>}/>     
            <Route exact path="/about" element={<About mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
