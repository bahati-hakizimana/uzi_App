import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid'

const AddUser = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber:'',
    role: 'admin',
    image: '',
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
        alert('You have successfully Registered you can log in now');
        navigate('/user');
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
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
         
       </div>
       <small className=' mt-1.5 text-center'>Add User</small>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          

<form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="username" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserName</label>
  </div>
  
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="email" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="+250" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
    </div>
  </div>
  
  <button type="submit" class="text-center text-white bg-primary-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit User</button>
</form>


          
        </div>
      </div>
    
  )
}

export default AddUser
