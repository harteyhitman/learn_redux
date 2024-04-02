import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    
    </div>
  );
};
export default App;
