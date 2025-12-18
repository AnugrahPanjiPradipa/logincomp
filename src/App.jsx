import React, { useState } from 'react';

import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Card from './components/Card.jsx';
import Sidebar from './components/Sidebar.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [Active, setActive] = useState('login');
  return (
    <div className="flex justify-center items-center h-screen bg-slate-950">
      <div className="w-[800px] h-[400px] border-slate-800 bg-slate-900 rounded-xl shadow=2xl">
        <div className="flex flex-row h-full">
          <Sidebar
            Active={Active}
            setActive={setActive}
          />
          <Card Active={Active} />
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={Active}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="w-full h-full flex items-center justify-center"
              >
                {Active === 'login' ? <LoginForm setActive={setActive} /> : <RegisterForm setActive={setActive} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
