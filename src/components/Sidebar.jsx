import React from 'react';
import { AppIcon, LoginIcon, RegisterIcon } from './Icons.jsx';

const Sidebar = ({ Active, setActive }) => {
  return (
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
                  ${Active === 'login' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
        >
          <LoginIcon className={`w-8 h-8 ${Active === 'login' ? 'opacity-100' : 'opacity-40'}`} />
          <p className="text-[10px] font-bold tracking-wider">LOGIN</p>
        </button>

        {/* TOMBOL REGISTER */}
        <button
          onClick={() => setActive('register')}
          className={`flex flex-col justify-center items-center gap-2 w-full py-3 cursor-pointer transition-all duration-300 border-l-4 
                  ${Active === 'register' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
        >
          <RegisterIcon className={`w-8 h-8 ${Active === 'register' ? 'opacity-100' : 'opacity-40'}`} />
          <p className="text-[10px] font-bold tracking-wider">REGISTER</p>
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
