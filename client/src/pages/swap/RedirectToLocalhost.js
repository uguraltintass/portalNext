// RedirectToLocalhost.js

import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

const RedirectToLocalhost = () => {
  const navigate = useNavigate ();

  useEffect(() => {
    window.open('https://crackportal.io/swap', '_blank');
  }, []);

  return null; // Since this component only redirects, it doesn't render anything
};

export default RedirectToLocalhost;
