import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.uzi.ishemahub.com/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const userData = await response.json();
        const token = userData.access_token;
        localStorage.setItem('token', token);
        
        if (userData.user.role === 'admin') {
          navigate('/');
        } else if (userData.user.role === 'student') {
          console.log("you are a student");
          // navigate('/student');
        } else {
          setError('Unknown role received from the server');
        }
      } else if (response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('Failed to log in. Please try again later.');
      }
    } catch (error) {
      console.error('Error during signin:', error);
      setError('An unexpected error occurred');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
            Welcome to Uzi App
          </h2>
        </div>
        <small className=' mt-1.5 text-center'>Sign in to your account</small>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="password_reset" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 text-purple-400 group-hover:text-indigo-400 aria-hidden:true ' />
                </span>
                Sign In
              </button>
            </div>
          </form>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signin;
