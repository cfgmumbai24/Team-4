

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone_no: '',
    city: '',
    hobby1: '',
    hobby2: '',
    income: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { fullName, age, gender, phone_no, city, hobby1, hobby2, income } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/signup`, formData);

      if (res.status === 201) {
        setSuccessMessage('Sign up successful! Redirecting to login page...');
        // setGlobal({ user_id }); // Assuming setGlobal expects an object
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || 'Failed to sign up. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Sign Up</h2>
      {successMessage && <div style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#d4edda', color: '#155724' }}>{successMessage}</div>}
      {errorMessage && <div style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f8d7da', color: '#721c24' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" name="fullName" value={fullName} onChange={handleChange} placeholder="Full Name" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <input type="number" name="age" value={age} onChange={handleChange} placeholder="Age" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <input type="text" name="gender" value={gender} onChange={handleChange} placeholder="Gender" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <input type="number" name="phone_no" value={phone_no} onChange={handleChange} placeholder="Phone No" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <input type="text" name="city" value={city} onChange={handleChange} placeholder="City" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <input type="text" name="hobby1" value={hobby1} onChange={handleChange} placeholder="Hobby 1" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <input type="text" name="hobby2" value={hobby2} onChange={handleChange} placeholder="Hobby 2" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <input type="number" name="income" value={income} onChange={handleChange} placeholder="Income" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

