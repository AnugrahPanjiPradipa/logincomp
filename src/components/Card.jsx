import React from 'react';

const Card = ({ Active }) => {
  return (
    <div className="w-[350px] h-full flex justify-center items-center">
      <div className="w-full h-[115%] bg-indigo-600 rounded-2xl shadow-2xl p-6">
        {Active === 'login' ? (
          <div className="flex flex-col">
            <div className="flex flex-col items-start">
              <h1 className="text-white font-bold text-3xl mb-2">Welcome Back!</h1>
              <p className="text-indigo-200 text-sm">Please sign in to continue.</p>
            </div>
            <img
              src="/login.svg"
              alt="Login"
              className="w-full h-auto py-10"
            />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-col items-start">
              <h1 className="text-white font-bold text-3xl mb-2">Join Us!</h1>
              <p className="text-indigo-200 text-sm">Create an account to start your journey.</p>
            </div>
            <img
              src="/signup.svg"
              alt="Register"
              className="w-full h-auto py-10"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
