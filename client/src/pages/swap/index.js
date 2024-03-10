import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route instead of BrowserRouter
import RedirectToLocalhost from './RedirectToLocalhost';

const Swap = () => {
  return (
        <Routes>
            <Route path="/" element={<RedirectToLocalhost />} />
        </Routes>
            
  );
};

export default Swap;
