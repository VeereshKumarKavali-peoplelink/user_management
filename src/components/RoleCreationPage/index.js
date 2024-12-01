import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; 
import { createUserAPI } from '../../api_offline/api';

const RoleCreationPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [status, setStatus] = useState({
    message: '',
    error: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const stringifiedData = JSON.stringify(formData);
      const response = await createUserAPI(stringifiedData)
      const data = await response.json()
      if (data.message)
      toast.success(`${data.message}`, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
      // Clear the form after successful submission
      if (data.error)
        toast.error(`${data.error}`, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000})
      setFormData({
        name: '',
        email: '',
        password: '',
        role: '',
      });
    } catch (err) {
      setStatus({
        message: '',
        error: err.response?.data?.error || 'Error creating user',
      });
    }
  };

  return (
    <div className="role-creation-page">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
      {status.message && <p className="success-message">{status.message}</p>}
      {status.error && <p className="error-message">{status.error}</p>}
    </div>
  );
};

export default RoleCreationPage;
