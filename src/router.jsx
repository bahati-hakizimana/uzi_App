import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Signin from './views/Signin';
import SignUp from './views/SignUp';
import PasswordReset from './views/PasswordReset';
import Quizes from './views/Quizes';
import Category from './views/Category';
import Class from './views/Class';
import GuestLayout from './componets/GuestLayout';
import DefaultLayout from './componets/DefaultLayout';
import User from './views/User';
import ConfirmPasswordReset from './views/ConfirmPasswordReset';
import Question from './views/Question';
import Level from './views/Level';
import Result from './views/Result';
import Answer from './views/Answer';
import Profile from './views/profile/Profile';
import StudentLayout from './componets/StudentLayout';
import StudentDshboard from './views/studentpages/StudentDshboard';
import QuizLevels from './views/studentpages/QuizLevels';
import StudentQuestions from './views/studentpages/StudentQuestions';


const router = createBrowserRouter([
  {
    path:"/",
    element:<DefaultLayout />,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard />
      },
      {
        path:"/users",
        element:<User />
      },
      {
        path:"/category",
        element:<Category />

      },
      {
        path:"/class",
        element:<Class />
      },
      {
        path:"/quizzes",
        element:<Quizes />
      },
     
      {
        path:"/questions",
        element:<Question />
      },
      {
        path:"/levels",
        element:<Level />
      },
      {
        path:"/results",
        element:<Result />
      },
      {
        path:"/answer",
        element:<Answer />
      },
      {
        path:"/profile",
        element:<Profile />
      },
    ]
      
    
  },
  {
    path:"/",
    element:<GuestLayout />,
    children:[
      {
        path:"/login",
        element:<Signin />
      },
      {
        path:"/signup",
        element:<SignUp />
      },
      {
        path:"/password_reset",
        element:<PasswordReset/>
      },
      {
        path:"/confirm_password_reset",
        element:<ConfirmPasswordReset />
      },
    ]

  },
  {
    path:'/',
    element:<StudentLayout />,
    children:[
      {
        path:'/studentdashboard',
      element:<StudentDshboard />
      },
      {
        path:'/quizelevels',
        element:<QuizLevels />
      },
      {
        path:'/studentquestion',
        element:<StudentQuestions />
      }

    ]
  },
      
      
    
  
 
]);

export default router;
