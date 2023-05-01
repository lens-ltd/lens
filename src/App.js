import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

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
      <Footer />
    </>
  );
};

export default App;

library.add(fab, fas, far)
