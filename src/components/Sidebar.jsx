import React from 'react';
import { AppIcon, LoginIcon, RegisterIcon } from './Icons.jsx';

const Sidebar = ({ Active, setActive }) => {
  return (
    <nav className="w-1/6 h-full border-r border-white/5">
      <ul className="flex flex-col h-full">
        <li className="flex-1 flex flex-col justify-center items-center">
          <AppIcon className="text-indigo-500 w-12 h-12" />
        </li>

        <li className="flex-1">
          <button
            onClick={() => setActive('login')}
            className={`flex flex-col justify-center items-center gap-2 w-full h-full cursor-pointer transition-all duration-300 border-l-5 
            ${Active === 'login' ? 'border-indigo-800 text-white bg-indigo-500' : 'border-transparent text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'}`}
          >
            <LoginIcon className={`w-8 h-8 ${Active === 'login' ? 'opacity-100' : 'opacity-40'}`} />
            <p className="text-[10px] font-bold tracking-wider">LOGIN</p>
          </button>
        </li>

        <li className="flex-1">
          <button
            onClick={() => setActive('register')}
            className={`flex flex-col justify-center items-center gap-2 w-full h-full cursor-pointer transition-all duration-300 border-l-5 rounded-bl-xl
            ${Active === 'register' ? 'border-indigo-800 text-white bg-indigo-500' : 'border-transparent text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'}`}
          >
            <RegisterIcon className={`w-8 h-8 ${Active === 'register' ? 'opacity-100' : 'opacity-40'}`} />
            <p className="text-[10px] font-bold tracking-wider">REGISTER</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
