import React from 'react'
import { useState } from 'react';
import { USER_DETAILS} from '../config';
import Search from './Search';
import ReportModal from './ReportModal';
import Header from './Header';


function UserDetails() {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers]=useState(USER_DETAILS);
    const [user, setUser] = useState(null);
    const setFiteredUsers = (newUsers)=>{
        setUsers(newUsers);
    }
    const resetUsers = ()=>{
        setUsers(USER_DETAILS)
    }
    const handleGenerateReport = () => {
        setShowModal(true);
    };
    
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <Header />
            <Search users={users} filterUsers={setFiteredUsers} resetUsers={resetUsers} />
        <div className="table-container">
        
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>ID</th>
              <th>Creation Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.ID}>
                <td>{user.Username}</td>
                <td>{user.Email}</td>
                <td>{user.Phone}</td>
                <td>{user.ID}</td>
                <td>{user.CreationDate}</td>
                <td>
                    <button className='btn' 
                        onClick={()=>{
                            handleGenerateReport();
                            setUser(user);
                        }}
                    >
                        Generate Report
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReportModal showModal={showModal} closeModal={closeModal} user={user} />
      </div>
      </div>
    )
}

export default UserDetails