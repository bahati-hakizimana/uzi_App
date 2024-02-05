import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex items-center justify-between text-white bg-black shadow-sm p-4'>
      {/* Your existing header content */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur quas perferendis quia molestiae laboriosam, optio libero, cumque porro nisi omnis recusandae hic provident atque adipisci beatae voluptate incidunt harum?</p>

      {/* User Navigation */}
      <div className='flex items-center'>
        <span className='ml-auto'>
          <Menu as='div' className='relative'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className='inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <img
                      className='h-6 w-6 rounded-full'
                      src={user.imageUrl}
                      alt={user.name}
                    />
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
                            <a
                              href={item.href}
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm`}
                            >
                              {item.name}
                            </a>
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
    </div>
  );
};

export default Header;
