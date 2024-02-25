import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [token, setToken] = useState();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.uzi.ishemahub.com/api/v1/user/' + id, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${storedToken}`, // Use storedToken here directly
          },
        });
        if (response.ok) {
          const userData = await response.json();
          setFormData(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error('Error during fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]); // Removed token from dependencies

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.uzi.ishemahub.com/api/v1/user/' + id, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Get the updated user data from the form data
        const updatedUserData = formData
        alert('You have successfully Updated User');
        navigate('/users');
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error('Error during update:', error);
    }
  };
  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
        <small className=' mt-1.5 text-center'>Update User</small>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="username" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
              </div>
            </div>
            <button type="submit" className="text-white bg-primary-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
