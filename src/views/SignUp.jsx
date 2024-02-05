import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber:'',
    password: '',

  });
  const handleSubmit= async (e) =>{
    e.preventDefault();
    try{
      const response = await fetch('https://api.uzi.ishemahub.com/api/v1/user',{
        method:'POST',
        headers:{
          'Content-Type':'application/jSON',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        console.log('You have successfully Registered');
      }else{
        console.error("Failred to regisiter please try again");
      }

    }catch{
      // console.error('Error during registration:', error);

    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Well come back to Uzi App
         </h2>
         
       </div>
       <small className=' mt-1.5 text-center'>Create New Account for Free</small>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full names
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                UserName
              </label>
              <div className="mt-2">
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                   id="email"
                   name="email"
                   type="email"
                   autoComplete="email"
                   required
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                PhoneNumber
              </label>
              <div className="mt-2">
                <input
                 id="phone"
                 name="phoneNumber"
                 type="text"
                 autoComplete="phone number"
                 required
                 value={formData.phoneNumber}
                 onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                   id="password"
                   name="password"
                   type="password"
                   autoComplete="current-password"
                   required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className=' absolute inset-y-0 left-0 flex items-center pl-3'>
                    <LockClosedIcon className=' h-5 w-5 text-purple-400 group-hover:text-indigo-400 aria-hidden:true ' />
                </span>
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{' '}
            <a href="login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              SigIn
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp
