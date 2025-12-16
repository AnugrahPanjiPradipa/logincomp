import React, { useState } from 'react';
import { AppIcon, LoginIcon, RegisterIcon } from './components/Icons.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import LoginForm from './components/LoginForm.jsx';

const App = () => {
  const [active, setActive] = useState('login');
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[800px] h-[400px] border-slate-800 bg-slate-900 rounded-xl relative">
        <div className="flex flex-row h-full">
          {/* SIDEBAR */}
          <ul className="w-1/6">
            <li className="flex flex-col items-center py-10 h-full gap-10">
              {/* Logo App */}
              <div className="flex flex-col justify-center items-center mb-4">
                <AppIcon className="text-indigo-500 w-16 h-16" />
              </div>

              {/* TOMBOL LOGIN */}
              <button
                onClick={() => setActive('login')}
                className={`flex flex-col justify-center items-center gap-2 w-full py-3 cursor-pointer transition-all duration-300 border-l-4 
                  ${active === 'login' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
              >
                <LoginIcon className={`w-8 h-8 ${active === 'login' ? 'opacity-100' : 'opacity-40'}`} />
                <p className="text-[10px] font-bold tracking-wider">LOGIN</p>
              </button>

              {/* TOMBOL REGISTER */}
              <button
                onClick={() => setActive('register')}
                className={`flex flex-col justify-center items-center gap-2 w-full py-3 cursor-pointer transition-all duration-300 border-l-4 
                  ${active === 'register' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
              >
                <RegisterIcon className={`w-8 h-8 ${active === 'register' ? 'opacity-100' : 'opacity-40'}`} />
                <p className="text-[10px] font-bold tracking-wider">REGISTER</p>
              </button>
            </li>
          </ul>

          <div className="w-[350px] h-full flex justify-center items-center">
            <div className="w-full h-[115%] bg-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center">
              {active === 'login' ? <h1 className="text-white font-bold text-2xl">Welcome Back!</h1> : <h1 className="text-white font-bold text-2xl">Create an Account!</h1>}
            </div>
          </div>
          {active === 'login' ? <LoginForm setActive={setActive} /> : <RegisterForm setActive={setActive} />}
        </div>
      </div>
    </div>
  );
};

export default App;
