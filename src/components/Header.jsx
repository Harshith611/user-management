import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate=useNavigate();
  return (
    <div className="header">
      <h1>User Management</h1>
      <div className="button-container">
        <button
            onClick={()=>{
                navigate('/sign-in')
            }}
        >Sign In</button>
        <button
            onClick={()=>{
                navigate('/')
            }}
        >User Dashboard</button>
      </div>
    </div>
  );
};

export default Header;
