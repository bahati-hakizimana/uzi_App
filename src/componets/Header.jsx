import React, { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import { Link, Navigate } from 'react-router-dom';

const Header = () => {
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
  const userNavigation = [
    // {
    //   path: '/profile',
    //   name: 'Profile',
    // },
    {
      path: '/login',
      name: 'Sign out',
      onClick: () => {
        localStorage.removeItem('token');
        setUserData(null);
        return <Navigate to="/login" replace />;
      },
    },
  ];

  return (
    <div className='text-black bg-white shadow p-4 overflow-hidden'>
      {/* User Navigation */}
      <div className='flex items-center mr-4'>
        <span className='ml-auto'>
          <Menu as='div'>
            {({ open }) => (
              <>
                <div className='flex'>
                  <Menu.Button className='inline-flex gap-1 items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <UserIcon className='h-8 w-8 rounded-full text-white bg-black' />
                    {userData ? (
                      <div>
                        <p><strong></strong> {userData.username}</p>
                       
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </Menu.Button>
                  <div className='flex items-center justify-center mt-4'>
                    
                  </div>
                </div>

                <Transition
                  show={open}
                  as={React.Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute items-center right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className=''>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.path}
                              className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } block px-4 py-2 text-sm`}
                              onClick={item.onClick}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </span>
      </div>

      {/* Display user details */}
      {/* {userData && (
        <div className='text-sm text-gray-500'>
          <p>{userData.username}</p>
          <p>{userData.email}</p>
        </div>
      )} */}
    </div>
  );
};

export default Header;
