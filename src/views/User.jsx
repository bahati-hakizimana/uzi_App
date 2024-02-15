import React, { useState, useEffect } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function User() {
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cmVrZXppQGdtYWlsLmNvbSIsInN1YiI6ImJlZjg2MjI5LTE4YmQtNGQ1Mi05M2NkLTc5NThiNThkNDU5NSIsImlhdCI6MTcwNzk5NTA0MiwiZXhwIjoxNzA4MDU1MDQyfQ.DY_A0Ejn5rNJNqhFUJlYp0SUnGBfdyu-hUBCa78-Yxk');
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const response = await fetch(`https://api.uzi.ishemahub.com/api/v1/user?page=${page}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        // setUsers(userData.users);
        console.log('Users data:', userData);
        setUsers(userData.list);
        // setTotalPages(userData.meta.totalPages);
        if (userData.total) {
          setTotalPages(userData.lastPage);
        }
      } else {
        console.log('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // const handleUpdateUser = (userId) => {
  //   console.log('Update user:', userId);
  // };

  // const handleDeleteUser = (userId) => {
  //   console.log('Delete user:', userId);
  // };

  return (
    <>
      <div className=' flex items-center justify-center'>
        <div>
        <h2 className=' text-center'>User List</h2>
        <table>
          <thead className=' border border-red-400'>
            <tr className='border-r border-red-400'>
              <th className='border-r border-black'>Id</th>
              <th className='border-r border-black'>Name</th>
              <th className='border-r border-black'>Username</th>
              <th className='border-r border-black'>Email</th>
              <th className='border-r border-black'>Phone Number</th>
              <th className='border-r border-black'>Role</th>
              <th className='border-r border-black'>Status</th>
              <th className='border-r border-black'>Created At</th>
              <th className='border-r border-black'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr key={user.id} className='border border-black px-6'>
                <td className='border-r border-black'>{user.id}</td>
                <td className='border-r border-black'>{user.name}</td>
                <td className='border-r border-black'>{user.username}</td>
                <td className='border-r border-black'>{user.email}</td>
                <td className='border-r border-black'>{user.phoneNumber}</td>
                <td className='border-r border-black'>{user.role}</td>
                <td className='border-r border-black'>{user.status}</td>
                <td className='border-r border-black'>{user.created_at}</td>
                <td>
                  <button onClick={() => handleUpdateUser(user.id)}>
                    <CiEdit size={25} className=' text-red-300' />
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    <MdDeleteForever size={25} className=' text-purple-400' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
        ))}
      </div>

        </div>
        

      </div>

    </>
  );
}

export default User;
