import React, { useState } from 'react';
import { FaBookMedical, FaUserFriends } from 'react-icons/fa';
import { MdDashboard, MdCategory, MdQuiz } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { Link } from 'react-router-dom';


const navlink = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <MdDashboard />,
  },
  {
    path: '/category',
    name: 'Category',
    icon: <MdCategory />,
  },
  {
    path: '/class',
    name: 'Class',
    icon: <SiGoogleclassroom />,
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    icon: <MdQuiz />,
  },
  {
    path: '/users',
    name: 'User',
    icon: <FaUserFriends />,
  },
];

const SideBar = () => {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <>
      <div className="px-10 py-12 flex flex-col shadow-xl bg-white h-screen border-b border-r-gray-300 w-1/5">
        <div className="logo flex space-x-3 items-center">
          <FaBookMedical />
          <span>Uzi App</span>
        </div>
        <div className="mt-10 flex flex-col space-y-8">
          {navlink.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex space-x-3 p-2 ${
                activeNav === index
                  ? 'bg-purple-400 text-white font-semibold'
                  : ''
              }`}
              onClick={() => setActiveNav(index)}
            >
              <div>{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
