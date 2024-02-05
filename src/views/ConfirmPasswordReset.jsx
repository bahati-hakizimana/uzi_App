import React, { useState } from 'react'

function ConfirmPasswordReset() {
    const [formData, setFormData] = useState({
        password:'',
        otp:''
    });
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData),
            });
            if(response.ok){
                console.log('You password has successfuly changed');
            }else{
                console.log('Failed to reset password');
            }
        }catch (error){
            console.error('errpr during password reset', error);

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
          
        </div>
        <small className=' mt-1.5 text-center'>Confirm Your Password Reset</small>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                New Password
              </label>
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
              <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">
                Otp number
              </label>
              <div className="mt-2">
                <input
                   id="otp"
                   name="otp"
                   type="text"
                   required
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Confirm
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Remener an account?{' '}
            <a href="login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              SigIn
            </a>
          </p>

        
        </div>
      </div>
    </>
  )
}

export default ConfirmPasswordReset
