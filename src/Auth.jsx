import { Navigate } from 'react-router-dom' 

const Auth = ({children}) => {
if(localStorage.getItem('token')){
    children
}
  return <Navigate to='/' />;
   
  
};

export default Auth