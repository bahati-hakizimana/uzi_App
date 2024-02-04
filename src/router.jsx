import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Signin from './views/Signin';
import SignUp from './views/SignUp';
import Quizes from './views/Quizes';
import Category from './views/Category';
import GuestLayout from './componets/GuestLayout';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard />
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
    ]

  },
  {
    path:"/quiz",
    element:<Quizes />
  },
  {
    path:"/categories",
    element:<Category />
  },
 
]);

export default router;
