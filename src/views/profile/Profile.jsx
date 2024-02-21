import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.uzi.ishemahub.com/api/v1/user/check', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const userData = await response.json();
          console.log('User data:', userData); 
          setUserData(userData);
          console.log(userData.user);
        } else {
          console.log('Failed to fetch user details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
  
    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <>
    <div className='flex items-center justify-center mt-4'>
    {userData ? (
      <div className='bg-white p-4 rounded shadow-md'>
        <h2 className='text-lg font-bold'>User Profile</h2>
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
</>  
  );
};

export default Profile;
