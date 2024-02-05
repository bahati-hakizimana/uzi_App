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
        path:"/users",
        element:<User />
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
  
 
]);

export default router;
