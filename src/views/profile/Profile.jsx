import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() =>{
    const StoredToken = localStorage.getItem(token);
  })

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
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {userData.username}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Profile;

