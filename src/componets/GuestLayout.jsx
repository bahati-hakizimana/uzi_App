import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  const [token, setToken] = useState(null);
  const ProtectedRoute = ({ token, children }) => {
    const navigate = useNavigate();
  
    if (token) {
       children;
    } else {
     
      navigate('/login');
      return null;
    }
  };
  return (
   <>
   <div>
    <Outlet />
   </div>
   </>
  )
}

export default GuestLayout
