import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import Dashboard from '../views/Dashboard'
import Category from '../views/Category';
import Class from '../views/Class';
import Quizes from '../views/Quizes';
import User from '../views/User';
import Question from '../views/Question';
import Level from '../views/Level';
import Answer from '../views/Answer';
import Result from '../views/Result';
import Profile from '../views/profile/Profile';

const DefaultLayout = () => {
  return (
    <>
      <div className='flex gap-0'>
      <SideBar />
      
        <div className="flex flex-col flex-1">
        <Header />
          
          <main>
            <Routes>
              <Route path="*" element={<Dashboard />} />
              <Route path="/category" element={<Category />} />
              <Route path="/class" element={<Class />} />
              <Route path="/quizzes" element={<Quizes />} />
              <Route path="/users" element={<User />} />
              <Route path="/questions" element={<Question />} />
              <Route path="/levels" element={<Level />} />
              <Route path="/answer" element={<Answer />} />
              <Route path="/results" element={<Result />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
