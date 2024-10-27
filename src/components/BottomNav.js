// src/components/BottomNav.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons'; // Import feather-icons

const BottomNav = () => {
  useEffect(() => {
    feather.replace(); // Replace <i> tags with SVG icons
  }, []);

  return (
    <nav className="absolute bottom-0 left-0 right-0 flex justify-around items-center bg-slate-400 p-4 shadow-lg rounded-b-l">
      <Link to="/" className="text-white text-xs text-center hover:underline">
        <i data-feather="home" className="w-6 h-6"></i> {/* Home Icon */}
        
      </Link>
      <Link to="/transactions" className="text-white text-xs hover:underline">
        <i data-feather="file-text" className="w-6 h-6"></i> {/* Transactions Icon */}
        
      </Link>
      <Link to="/send-money" className="text-white text-xs hover:underline">
        <i data-feather="send" className="w-6 h-6 "></i> {/* Send Money Icon */}
        
      </Link>
    </nav>
  );
};

export default BottomNav;