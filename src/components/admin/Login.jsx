import React, { useState } from "react";

function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form className="w-full mt-6 sm:max-w-md text-gray-600" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label  onChange={e=> setEmail(e.target.value)} value={email}
              >Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className=" border-b-2 border-gray-300 p-2 outline-none mb-6
                "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input onChange={e=> setPassword(e.target.value)} value={password}
                type="password"
                required
                placeholder="Password"
                className=" border-b-2 border-gray-300 p-2 outline-none mb-6
                "
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-primary rounded cursor-pointer hover:bg-primary/90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
