import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  if (localStorage.getItem('token')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export default Auth;
