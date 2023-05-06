//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import About from './components/About'
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";





function App() {

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode is enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode is enabled", "success")
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { // this will remove the alert within 1.5 seconds 
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" home="Home" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Try TextUtils" mode={mode} />} />

            <Route path="/about" element={ <About />} />
          
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


