import React,{useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import Dashboard from '../views/Dashboard';
import Category from '../views/Category';
import Class from '../views/Class';
import Quizes from '../views/Quizes';
import User from '../views/User';
import Question from '../views/Question';
import Level from '../views/Level';
import Answer from '../views/Answer';
import Result from '../views/Result';
import Profile from '../views/profile/Profile';
import AddUser from './forms/AddUser';
import Auth from '../Auth';
import UpdateUser from './forms/UpdateUser';

const DefaultLayout = ({ userData, setUserData}) => {
  const [token, setToken] = useState(null);
  const ProtectedRoute = ({ token, children }) => {
    const navigate = useNavigate();
  
    if (token) {
      return children;
    } else {
     
      navigate('/login');
      return null;
    }
  };
  return (
    <>
      <div className='flex gap-0'>
        <SideBar />
        <div className="flex flex-col flex-1">
          <Header userData={userData} setUserData={setUserData} />
          <main>
            <Routes>
              <Route path="/dashboard" element={<Auth>
                <Dashboard />
              </Auth>} />
              <Route path="/category" element={<Auth>
                <Category />
              </Auth>}
               />
              <Route path="/class" element={<Class />} />
              <Route path="/quizzes" element={<Quizes />} />
              <Route path="/users" element={<Auth>
                <User />

              </Auth>
              } />
              <Route path="/questions" element={<Auth>
                <Question />
              </Auth>} />
              <Route path="/levels" element={<Auth>
                <Level />
              </Auth>} />
              <Route path="/answer" element={<Auth>
                <Answer />
              </Auth>} />
              <Route path="/results" element={<Auth>
                <Result />
              </Auth>} />
              <Route path="/profile" element={<Auth>
                <Profile />
              </Auth>} />
              <Route path="/userupdate:id" element={<Auth>
                <UpdateUser />
              </Auth>} />
              
              
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
