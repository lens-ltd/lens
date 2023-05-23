import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Lens</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

library.add(fab, fas, far);
