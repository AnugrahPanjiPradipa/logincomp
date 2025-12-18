import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ Active }) => {
  const isLogin = Active === 'login';

  return (
    <div className="w-[350px] h-full flex justify-center items-center">
      <div className="w-full h-[115%] bg-indigo-600 rounded-2xl shadow-2xl p-6 overflow-hidden relative">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={Active}
            initial={{ y: isLogin ? -300 : 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: isLogin ? 300 : -300, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex flex-col h-full w-full"
          >
            <div className="flex flex-col items-start">
              <h1 className="text-white font-bold text-3xl mb-2">{isLogin ? 'Welcome Back!' : 'Join Us!'}</h1>
              <p className="text-indigo-200 text-sm">{isLogin ? 'Please sign in to continue.' : 'Create an account to start your journey.'}</p>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                src={isLogin ? '/login.svg' : '/signup.svg'}
                alt={Active}
                className="w-full h-full py-10"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Card;
