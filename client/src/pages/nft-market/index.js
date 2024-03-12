import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route instead of BrowserRouter
import RedirectToLocalhost from './RedirectToLocalhost';

const NFTmarket = () => {
  return (
        <Routes>
            <Route path="/" element={<RedirectToLocalhost />} />
        </Routes>
            
  );
};

export default NFTmarket;
