import React from 'react';
import { useLocation } from 'react-router-dom';

const UpdateUser = () => {
  const { state } = useLocation();
  const user = state?.user;

  return (
    <div>
      <h1>Update User</h1>
      {user && (
        <>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </>
        
      )}

      <p>loading........</p>
    </div>
  );
};

export default UpdateUser;

