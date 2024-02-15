import React, { useState, useEffect } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function User() {
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cmVrZXppQGdtYWlsLmNvbSIsInN1YiI6ImJlZjg2MjI5LTE4YmQtNGQ1Mi05M2NkLTc5NThiNThkNDU5NSIsImlhdCI6MTcwODAxMzMzNCwiZXhwIjoxNzA4MDczMzM0fQ.WrpgOszNYx2ftzWKfQZByg9CJeRj8kawndfLF18R6dE');
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const response = await fetch(`https://api.uzi.ishemahub.com/api/v1/user?pageNumber=${currentPage}&pageSize=4`, {
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

  const handleUpdateUser = (userId) => {
    console.log('Update user:', userId);
  };

  const handleDeleteUser = (userId) => {
    console.log('Delete user:', userId);
  };

  return (
    <>
       <button>+ Add a User</button>
      <div className="container flex items-center">
      <div className="">
          <div>
            <h1 className="text-center font-sembold">Users List</h1>
            <table className=' ml-4 mt-4' >
        <thead>
          <tr>
            <th class="px-1 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
            <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
            <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">UserName</th>
            <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
            <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>

            <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
            <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
            <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Action</th>
            <th class="px-1 py-2 border-b-2 border-gray-300"></th>
          </tr>
        </thead>
        <tbody class="bg-white">
          {users && users.map((user) => (
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 text-gray-800">{user.id}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 text-blue-900">{user.name}</div>
              </td>
              <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.username}</td>
              <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.email}</td>
              <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {user.phoneNumber}
              </td>
              <td class="px-1 py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{user.status}</td>
              <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                {user.created_at}
              </td>
              <td class=" px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
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
      <div className='ml-4'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)} className=' text-purple-400'>{page}</button>
        ))}
      </div>
          </div>
         
        </div>
        
      </div>
        

      






    </>
  );
}

export default User;
