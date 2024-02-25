import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function User() {
  const navigate = useNavigate();

  const [token, setToken] = useState('');
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchUsers(1, storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchUsers(currentPage, token);
    }
  }, [currentPage, token]);
  const fetchUsers = async (page, token) => {
    try {
      const response = await fetch(`https://api.uzi.ishemahub.com/api/v1/user?pageNumber=${currentPage}&pageSize=3`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        // setUsers(userData.users);
        // console.log('Users data:', userData);
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


  const handleEdit = (id) => {
    alert(id);
  }



  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`https://api.uzi.ishemahub.com/api/v1/user/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {

          setUsers(users.filter(user => user.id !== id));
          console.log('User deleted successfully.');
        } else {
          console.log('Failed to delete user:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 flex items-center mt-3">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-1/2">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input type="text" id="simple-search" value={searchQuery} onChange={handleSearchChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                </div>
              </form>
            </div>
            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Link to="/adduser" type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                Add User
              </Link>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3">UserId</th>
                  <th scope="col" class="px-4 py-3">Name</th>
                  <th scope="col" class="px-4 py-3">UserName</th>
                  <th scope="col" class="px-4 py-3">Email</th>
                  <th scope="col" class="px-4 py-3">Phone Number</th>
                  <th scope="col" class="px-4 py-3">Status</th>
                  <th scope="col" class="px-4 py-3">Created_at</th>
                  <th scope="col" class="px-4 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr class="border-b dark:border-gray-700">
                    <td class="px-4 py-3">{user.id}</td>
                    <td class="px-4 py-3">{user.name}</td>
                    <td class="px-4 py-3">{user.username}</td>
                    <td class="px-4 py-3">{user.email}</td>
                    <td class="px-4 py-3">{user.phoneNumber}</td>
                    <td class="px-4 py-3">{user.status}</td>
                    <td class="px-4 py-3">{user.created_at}</td>
                    <td class="px-4 py-3 flex items-center justify-end">
                      <button onClick={() => handleDelete(user.id)} class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                        <MdDeleteForever size={25} className='text-purple-400' />
                      </button>
                      <Link to={`/updateuser/${user.id}`} class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                        <CiEdit size={25} className='text-red-300' />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span class="font-semibold text-gray-900 dark:text-white">{filteredUsers.length > 0 ? (currentPage - 1) * 3 + 1 : 0}-{(currentPage - 1) * 3 + filteredUsers.length}</span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">1000</span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
              <li>
                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Previous</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${page === currentPage
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      } inline-flex items-center justify-center text-sm py-2 px-3 leading-tight border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent rounded-lg`}
                  >
                    {page}
                  </button>
                ))}
              </li>
              <li>
                <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Next</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default User;
