import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cmVrZXppQGdtYWlsLmNvbSIsInN1YiI6ImJlZjg2MjI5LTE4YmQtNGQ1Mi05M2NkLTc5NThiNThkNDU5NSIsImlhdCI6MTcwNzk5NTA0MiwiZXhwIjoxNzA4MDU1MDQyfQ.DY_A0Ejn5rNJNqhFUJlYp0SUnGBfdyu-hUBCa78-Yxk');
  const [userData, setUserData] = useState(null);

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
          setUserData(userData.user);
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
      {userData}
      {/* {userData ? (
        // <div>
        //   <h2>User Profile</h2>
        //   <p>Username: {userData.user.username}</p>
        //   <p>Name: {userData.name}</p>
        //   <p>Email: {userData.email}</p>
        //   <p>Phone Number: {userData.phoneNumber}</p>
        // </div>
        {userData}
      ) : (
        <p>Loading...</p>
      )} */}
    </>
  );
};

export default Profile;

