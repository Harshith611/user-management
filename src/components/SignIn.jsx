import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = () => {
    const newFormErrors={}
    if(formData.password === ''){
        newFormErrors.password='enter password'
        setFormErrors(newFormErrors);
    }
    if(formData.username===''){
        newFormErrors.username='enter username';
        setFormErrors(newFormErrors);
    }
    if(formData.username!=='' && formData.password!==''){
        navigate('/user-details');
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <h2 className="signin-heading">Sign In</h2>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-input"
          />
          <p>{formErrors.username}</p>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
          <p>{formErrors.password}</p>
        </div>
        <button onClick={handleSignIn} className="signin-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
