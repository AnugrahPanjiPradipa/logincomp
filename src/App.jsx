import React, { useState } from 'react';

import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Card from './components/Card.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
  const [Active, setActive] = useState('login');
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[800px] h-[400px] border-slate-800 bg-slate-900 rounded-xl relative">
        <div className="flex flex-row h-full">
          <Sidebar
            Active={Active}
            setActive={setActive}
          />
          <Card Active={Active} />
          {Active === 'login' ? <LoginForm setActive={setActive} /> : <RegisterForm setActive={setActive} />}
        </div>
      </div>
    </div>
  );
};

export default App;
