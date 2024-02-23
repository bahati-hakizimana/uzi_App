import React, { useState } from 'react';
import { FaBookMedical, FaUserFriends, FaQuestionCircle, FaFolderOpen } from 'react-icons/fa';
import { MdDashboard, MdCategory, MdQuiz } from 'react-icons/md';
import { SiGoogleclassroom, SiLevelsdotfyi } from 'react-icons/si';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RiQuestionAnswerLine } from "react-icons/ri";
import { motion } from 'framer-motion';

const navlink = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <MdDashboard size={23} />,
  },
  {
    path: '/users',
    name: 'User',
    icon: <FaUserFriends size={23} />,
  },
  {
    path: '/category',
    name: 'Category',
    icon: <MdCategory size={23}/>,
    submenu: [
      {
        path: '/category/subcategory1',
        name: 'Subcategory 1',
      },
      {
        path: '/category/subcategory2',
        name: 'Subcategory 2',
      },
    ]
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    icon: <MdQuiz size={23}/>,
  },
  {
    path:'/questions',
    name:'Question',
    icon:<FaQuestionCircle size={23}/>
  },
  {
    path:'/levels',
    name:'Lavel',
    icon:<SiLevelsdotfyi size={23}/>
  },
  {
    path:'/answer',
    name:'Answer',
    icon:<RiQuestionAnswerLine size={23} />
  },
  {
    path:'/results',
    name:'Result',
    icon:<FaFolderOpen size={23}/>
  }
];

const SideBar = () => {
  const Sidebar_animation = {
    open:{
      width: "16rem",
      TransitionEvent:{
        damping:40,
      },
    },
    closed:{
      width:"4rem",
      TransitionEvent:{
        damping:40,
      },

    },

  };
  const [isOpen, setIsOpen] = useState(true);
  const [activeNavIndex,setActiveNavIndex]  = useState(0)

  return (
    <>  
      <motion.div
        variants={Sidebar_animation}
        animate={ isOpen ? "open" : "closed" }
        className="px-10 py-2 flex flex-col text-gray-500 shadow-xl bg-white h-full border-b border-r-gray-300 w-[16rem] 
        overflow-hidden top-0 z-[999] max-w-[16rem] md:relative fixed"
      >
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <FaBookMedical size={45} className={isOpen ? "block" : "block"} />
          <span className={isOpen ? "block text-xl whitespace-pre" : "hidden"} >Uzi App</span>
        </div>
        <motion.div
        animate={
          isOpen
          ?{
            x:0,
            y:0,
            rotate:0,
          }
          :{
            x:-10,
            y:-200,
            rotate:180,
          }
        }
        transition={{
          duration:0,
        }}
          onClick={() => setIsOpen(!isOpen)}
          className='absolute w-fit h-fit z-50 right-2 bottom-5  cursor-pointer md:block hidden'
        >
          <IoIosArrowBack size={25} />
        </motion.div>
        
        <div className="mt-10 flex flex-col space-y-8">
          {navlink.map((item, index) => (
           
            <Link
              key={index}
              to={item.path}
              className={"flex space-x-3 p-2 rounded" + (activeNavIndex === index ? " bg-primary-500 text-white font-semibold" : "")}
              onClick= {() => setActiveNavIndex(index)}
            >
              <div>{item.icon}</div>
              <span className={isOpen ? "block": "hidden"}>{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
