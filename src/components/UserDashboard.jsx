import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

function UserDashboard() {
    const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="button-container">
        <button className="dashboard-button"
            onClick={()=>{
                navigate('/user-details')
            }}
        >
            User Details
        </button>
        <button className="dashboard-button"
            onClick={()=>{
                navigate('/sign-in')
            }}
        >Sign In</button>
      </div>
    </div>
  )
}

export default UserDashboard