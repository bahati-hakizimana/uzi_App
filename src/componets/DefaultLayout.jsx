import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import Dashboard from '../views/Dashboard'
import Category from '../views/Category';
import Class from '../views/Class';
import Quizes from '../views/Quizes';
import User from '../views/User';

const DefaultLayout = () => {
  return (
    <>
      <div className='flex gap-1'>
        <SideBar />
        <div className="flex flex-col">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/category" element={<Category />} />
              <Route path="/class" element={<Class />} />
              <Route path="/quizzes" element={<Quizes />} />
              <Route path="/users" element={<User />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
