import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`https://api.uzi.ishemahub.com/api/v1/user?page=${page}`);
      headers: {
        Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11aHVtdXJlQGdtYWlsLmNvbSIsInN1YiI6IjEwZDllZWE5LTNiYzYtNGI3Ni1hZjk2LTgwNjNjZTljYzg1MyIsImlhdCI6MTcwNzU3MzEyMywiZXhwIjoxNzA3NjMzMTIzfQ.KkY7wl68P3XoJdHKp4Dx-6tYHb34fKmScTMMYX5bemo"
      }
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
