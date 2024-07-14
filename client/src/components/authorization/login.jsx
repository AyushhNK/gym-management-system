import React, { useState,useContext } from "react";
import background from "../../assets/background.avif";
import Navbar from '../NavFoo/Navbar'
import LoginContext from '../contexts/logincontext'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const {data,setData}=useContext(LoginContext)
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    username: Username,  
    password: password  
  };

  try {
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      setData(responseData)
      navigate('/')
      console.log('Login successful:', responseData);
      // Handle successful login (e.g., redirect to a different page)
    } else {
      console.error('Login failed:', response.statusText);
      // Handle login failure (e.g., show an error message)
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle network or other errors
  }
};


  return (
    <>
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Gym Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="Username">
              Username
            </label>
            <input
              type="Username"
              id="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
