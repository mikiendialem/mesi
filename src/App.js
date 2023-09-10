import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path="/" render={(props) => <Login {...props} setUser={setUser} />} />
        <Route path="/signup" render={(props) => <Signup {...props} setUser={setUser} />} />
        <Route path="/profile" render={() => <Profile user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
