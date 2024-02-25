import React, { useState, useRef, useEffect } from 'react';
import { FaBookMedical, FaUserFriends, FaQuestionCircle, FaFolderOpen } from 'react-icons/fa';
import { MdDashboard, MdCategory, MdQuiz } from 'react-icons/md';
import { SiGoogleclassroom, SiLevelsdotfyi } from 'react-icons/si';
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { RiQuestionAnswerLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
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
    icon: <MdCategory size={23} />,
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
    icon: <MdQuiz size={23} />,
  },
  {
    path: '/questions',
    name: 'Question',
    icon: <FaQuestionCircle size={23} />
  },
  {
    path: '/levels',
    name: 'Lavel',
    icon: <SiLevelsdotfyi size={23} />
  },
  {
    path: '/answer',
    name: 'Answer',
    icon: <RiQuestionAnswerLine size={23} />
  },
  {
    path: '/results',
    name: 'Result',
    icon: <FaFolderOpen size={23} />
  }
];

const SideBar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  // const Sidebar_animation = {
  //   open: {
  //     width: "16rem",
  //     TransitionEvent: {
  //       damping: 40,
  //     },
  //   },
  //   closed: {
  //     width: "4rem",
  //     TransitionEvent: {
  //       damping: 40,
  //     },

  //   },

  // };
  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };
  const [isOpen, setIsOpen] = useState(true);
  const [activeNavIndex, setActiveNavIndex] = useState(0)

  return (
    <>


      <div className=''>
        <div
          onClick={() => setOpen(false)}
          className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
            } `}
        ></div>
        <motion.div
          ref={sidebarRef}
          variants={Nav_animation}
          initial={{ x: isTabletMid ? -250 : 0 }}
          animate={open ? "open" : "closed"}
          className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
        >
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
            <img
              src="https://img.icons8.com/color/512/firebase.png"
              width={45}
              alt=""
            />
            <span className="text-xl whitespace-pre">Uzi App</span>
          </div>

          <div className="flex flex-col  h-full">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] text-gray-500 py-5 flex flex-col gap-4  font-medium overflow-x-hidden   md:h-[68%] h-[70%]">
              {navlink.map((item, index) => (

                <Link
                  key={index}
                  to={item.path}
                  className={"flex space-x-3 p-2 rounded" + (activeNavIndex === index ? " bg-primary-500 text-white font-semibold" : "")}
                  onClick={() => setActiveNavIndex(index)}
                >
                  <div>{item.icon}</div>
                  <span className={isOpen ? "block" : "hidden"}>{item.name}</span>
                </Link>
              ))}

            </ul>

          </div>
          <motion.div
            onClick={() => {
              setOpen(!open);
            }}
            animate={
              open
                ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
                : {
                  x: -5,
                  y: -100,
                  rotate: 180,
                }
            }
            transition={{ duration: 0 }}
            className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
          >
            <IoIosArrowBack size={25} />
          </motion.div>
        </motion.div>
        <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
          <MdMenu size={25} />
        </div>
      </div>
    </>

  );
};

export default SideBar;
