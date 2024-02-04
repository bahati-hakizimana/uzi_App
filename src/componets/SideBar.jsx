import React, { useState } from 'react';
import { FaBookMedical } from 'react-icons/fa';
import { MdDashboard, MdCategory, MdQuiz } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';

const navlink = [
  {
    path:'/',
    name: 'Dashboard',
    icon: <MdDashboard />,
  },
  {
    name: 'Category',
    icon: <MdCategory />,
  },
  {
    name: 'Class',
    icon: <SiGoogleclassroom />,
  },
  {
    name: 'Quizzes',
    icon: <MdQuiz />,
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
            <div
              key={index}
              className={`flex space-x-3 p-2 ${
                activeNav === index
                  ? 'bg-purple-400 text-white font-semibold'
                  : ''
              }`}
              onClick={() => setActiveNav(index)}
            >
              <div>{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
