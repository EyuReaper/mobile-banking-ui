// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import SendMoney from './components/SendMoney';
import './index.css';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <div className='box'>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-grow p-4 pb-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/send-money" element={<SendMoney />} />
              {/* Add a Not Found route if desired */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>

          <BottomNav />
        </div>
      </Router>
    </div>
  );
};

export default App;