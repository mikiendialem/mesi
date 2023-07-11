import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dis from './Components/Dis'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dis" element={<Dis/>}/>
      </Routes>
    </Router>
  );
}

export default App;
