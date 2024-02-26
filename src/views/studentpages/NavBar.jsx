// import React, { useState, useEffect } from 'react';
// import { Menu, Transition } from '@headlessui/react';
// import { UserIcon } from '@heroicons/react/24/outline';
// import { Link, Navigate } from 'react-router-dom';

// const Header = () => {
//   const [token, setToken] = useState('');
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch('https://api.uzi.ishemahub.com/api/v1/user/check', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (response.ok) {
//           const userData = await response.json();
//           console.log('User data:', userData);
//           setUserData(userData);
//           console.log(userData.user);
//         } else {
//           console.log('Failed to fetch user details:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     if (token) {
//       fetchUserData();
//     }
//   }, [token]);
//   const userNavigation = [
//     // {
//     //   path: '/profile',
//     //   name: 'Profile',
//     // },
//     {
//       path: '/login',
//       name: 'Sign out',
//       onClick: () => {
//         localStorage.removeItem('token');
//         setUserData(null);
//         return <Navigate to="/login" replace />;
//       },
//     },
//   ];

//   return (
//     <div className='text-black bg-white shadow p-4 overflow-hidden'>
//       {/* User Navigation */}
//       <div className='flex items-center mr-4'>
//         <span className='ml-auto'>
//           <Menu as='div'>
//             {({ open }) => (
//               <>
//                 <div className='flex'>
//                   <Menu.Button className='inline-flex gap-1 items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
//                     <UserIcon className='h-8 w-8 rounded-full text-white bg-black' />
//                     {userData ? (
//                       <div>
//                         <p><strong></strong> {userData.username}</p>

//                       </div>
//                     ) : (
//                       <p>Loading...</p>
//                     )}
//                   </Menu.Button>
//                   <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
//                     <span class="sr-only">Open main menu</span>
//                     <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//                     </svg>
//                   </button>
//                 </div>

//                 <Transition
//                   show={open}
//                   as={React.Fragment}
//                   enter='transition ease-out duration-100'
//                   enterFrom='transform opacity-0 scale-95'
//                   enterTo='transform opacity-100 scale-100'
//                   leave='transition ease-in duration-75'
//                   leaveFrom='transform opacity-100 scale-100'
//                   leaveTo='transform opacity-0 scale-95'
//                 >
//                   <Menu.Items className='absolute items-center right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
//                     <div className=''>
//                       {userNavigation.map((item) => (
//                         <Menu.Item key={item.name}>
//                           {({ active }) => (
//                             <Link
//                               to={item.path}
//                               className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                                 } block px-4 py-2 text-sm`}
//                               onClick={item.onClick}
//                             >
//                               {item.name}
//                             </Link>
//                           )}
//                         </Menu.Item>
//                       ))}
//                     </div>
//                   </Menu.Items>
//                 </Transition>
//               </>
//             )}
//           </Menu>
//         </span>
//       </div>

//       {/* Display user details */}
//       {/* {userData && (
//         <div className='text-sm text-gray-500'>
//           <p>{userData.username}</p>
//           <p>{userData.email}</p>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Header;






import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect, Fragment } from 'react';
import { Transition, Disclosure, Menu, } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import { Link, Navigate } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
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
    <Disclosure as="nav" className=" bg-white shadow p-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="inline-flex gap-1 items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-purple-400  ">
                      <UserIcon className='h-8 w-8 rounded-full text-white bg-black' />
//                     {userData ? (
                        <div>
                          <p> {userData.username}</p>

                        </div>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className=''>
//                       {userNavigation.map((item) => (
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
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <Menu as="div">
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
                  </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
