import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Lens</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={null} />
      </Routes>
    </>
  );
};

export default App;
