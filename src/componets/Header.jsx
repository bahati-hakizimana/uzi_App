import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'; // Import UserIcon
import { Link } from 'react-router-dom';

const Header = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const userNavigation = [
    { 
      path: '/profile',
      name: 'Profile',
    },
    { 
      path: '/login',
      name: 'Sign out',
    },
  ];

  return (
    <div className='text-black bg-white shadow p-4 overflow-hidden'>
      
      {/* User Navigation */}
      <div className='flex items-center mr-4'>
        <span className='ml-auto'>
          <Menu as='div' >
            {({ open }) => (
              <>
                <div className=''>
                  <Menu.Button className='inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <UserIcon className='h-8 w-8 rounded-full' /> {/* Use UserIcon */}
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.path}
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm`}
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
      {userData && (
        <div className='text-sm text-gray-500'>
          <p>{userData.username}</p>
          <p>{userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
