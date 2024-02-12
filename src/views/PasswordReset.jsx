import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; 

const PsswordReset = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username:''
  });
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await fetch('https://api.uzi.ishemahub.com/api/v1/user/password-reset',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      if(response.ok){
        alert('We have sent a messege on your registered phone number please enter all numbers to confirm reset');
        navigate('/confirm_password_reset');
        // History('/confirm_password_reset');

      }else{
        console.log('Password reset failed try again');
      }
    }catch (error){

      console.error('Error during password reset:', error);

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
            WellCome back to Uzi App
          </h2>
          
        </div>
        <small className=' mt-1.5 text-center'>Reset Yuor Password here</small>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
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

export default PsswordReset
