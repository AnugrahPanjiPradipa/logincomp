const RegisterForm = ({ setActive }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-8 py-4 w-1/2 h-full">
      <p className="text-sm font-semibold text-white">
        Already have an account?
        <button
          onClick={() => setActive('login')}
          className="ml-1 cursor-pointer border-b-2 border-transparent hover:border-white duration-75"
        >
          Sign in.
        </button>
      </p>

      <form
        action=""
        className="flex flex-col w-full gap-2"
      >
        <div>
          <label className="w-full block text-left text-xs font-bold text-white mb-1">Username</label>
          <input
            type="text"
            placeholder="Input your username"
            className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 bg-white/5 text-white"
          />
        </div>
        <div>
          <label className="w-full block text-left text-xs font-bold text-white mb-1">Email</label>
          <input
            type="text"
            placeholder="Input your email"
            className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 bg-white/5 text-white"
          />
        </div>
        <div>
          <label className="w-full block text-left text-xs font-bold text-white mb-1">Password</label>
          <input
            type="text"
            placeholder="Input your password"
            className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 bg-white/5 text-white"
          />
        </div>

        <button className="flex justify-center items-center self-center w-1/2 py-2 mt-2 rounded-md border-0 bg-indigo-500 hover:bg-indigo-400 transition">
          <p className="text-amber-50 font-bold text-sm">SIGN UP</p>
        </button>
      </form>

      <p className="text-[10px] text-center text-white opacity-80">By clicking Sign In you agree to our terms and conditions, privacy policy, and reusability rules.</p>
    </div>
  );
};

export default RegisterForm;
