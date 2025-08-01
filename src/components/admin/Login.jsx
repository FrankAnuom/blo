import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

function Login() {
  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/admin/login', { email, password });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
        toast.success("Login successful");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log('Login error:', error);
      toast.error(error?.response?.data?.message || error.message);
    }
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
            <div className="flex flex-col mb-6">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="border-b-2 border-gray-300 p-2 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                placeholder="Password"
                className="border-b-2 border-gray-300 p-2 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
