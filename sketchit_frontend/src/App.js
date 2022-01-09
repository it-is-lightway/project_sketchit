import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Welcome, About } from './components';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/welcome');

  }, [navigate]);

  return (
    <Routes>
     <Route path="welcome*" element={<Welcome />} /> 
     <Route path="about*" element={<About />} /> 
     <Route path="/*" element={<Home />} />
    
    </Routes>
  );
};

export default App;