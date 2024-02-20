import { createBrowserRouter, Navigate } from 'react-router-dom';
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
import Test from './views/Test';

const ProtectedRoute = ({ element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  return isLoggedIn ? element : <Navigate to="/login" replace />;
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <ProtectedRoute element={<Dashboard />} />
      },
      {
        path: '/users',
        element: <ProtectedRoute element={<User />} />
      },
      {
        path: '/category',
        element: <ProtectedRoute element={<Category />} />
      },
      {
        path: '/class',
        element: <ProtectedRoute element={<Class />} />
      },
      {
        path: '/quizzes',
        element: <ProtectedRoute element={<Quizes />} />
      },
      {
        path: '/questions',
        element: <ProtectedRoute element={<Question />} />
      },
      {
        path: '/levels',
        element: <ProtectedRoute element={<Level />} />
      },
      {
        path: '/results',
        element: <ProtectedRoute element={<Result />} />
      },
      {
        path: '/answer',
        element: <ProtectedRoute element={<Answer />} />
      },
      {
        path: '/profile',
        element: <ProtectedRoute element={<Profile />} />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Signin />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/password_reset',
        element: <PasswordReset />
      },
      {
        path: '/confirm_password_reset',
        element: <ConfirmPasswordReset />
      }
    ]
  },
  {
    path: '/',
    element: <StudentLayout />,
    children: [
      {
        path: '/studentdashboard',
        element: <ProtectedRoute element={<StudentDshboard />} />
      },
      {
        path: '/quizelevels',
        element: <ProtectedRoute element={<QuizLevels />} />
      },
      {
        path: '/studentquestion',
        element: <ProtectedRoute element={<StudentQuestions />} />
      }
    ]
  },
  {
    path: '/test',
    element: <ProtectedRoute element={<Test />} />
  }
]);

export default router;
