// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const UserLogin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ fullName : '' });
//   const [errorMessage, setErrorMessage] = useState('');

//   // Destructure phone_no from formData
//   const { fullName } = formData;

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send POST request to login endpoint
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // If login is successful, navigate to UserDash
//       console.log(res.data);
//       navigate('/DashMain');
//     } catch (error) {
//       // Handle errors appropriately
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error('Backend responded with an error:', error.response.data);
//         setErrorMessage(error.response.data.message || 'Invalid phone number. Please try again.');
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response received:', error.request);
//         setErrorMessage('No response from the server. Please try again.');
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error('Error in setting up the request:', error.message);
//         setErrorMessage('Request setup error. Please try again.');
//       }
//     }
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundImage: 'url("assets/img/bglogin.jpg")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat'
//     }}>
//       <div style={{
//         maxWidth: '400px',
//         margin: '0 auto',
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         backgroundColor: 'rgba(255, 255, 255, 0.9)' // slightly transparent white background for readability
//       }}>
//         <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
//         {errorMessage && <div style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f8d7da', color: '#721c24' }}>{errorMessage}</div>}
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//           <input
//             type="text"
//             name="fullName"
//             value={fullName}
//             onChange={handleChange}
//             placeholder="Full Name"
//             style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
//             required
//           />
//           <button
//             type="submit"
//             style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;


// UserLogin.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useGlobalState } from '../constants/GlobalStateProvider';

// const UserLogin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ fullName: '' });
//   const [errorMessage, setErrorMessage] = useState('');
//   const { setGlobal } = useGlobalState();

//   const { fullName } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Store user details in the global state
//       // setGlobal(res.data.user);

//       // Navigate to DashMain after successful login
//       navigate('/DashMain');
//     } catch (error) {
//       if (error.response) {
//         console.error('Backend responded with an error:', error.response.data);
//         setErrorMessage(error.response.data.message || 'Invalid full name. Please try again.');
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//         setErrorMessage('No response from the server. Please try again.');
//       } else {
//         console.error('Error in setting up the request:', error.message);
//         setErrorMessage('Request setup error. Please try again.');
//       }
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url("assets/img/bglogin.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//       <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
//         <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
//         {errorMessage && <div style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f8d7da', color: '#721c24' }}>{errorMessage}</div>}
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//           <input type="text" name="fullName" value={fullName} onChange={handleChange} placeholder="Full Name" style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
//           <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useGlobalState } from '../constants/GlobalStateProvider';

const UserLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ fullName: '' });
    const [errorMessage, setErrorMessage] = useState('');
    // const { setGlobal } = useGlobalState();

    const { fullName } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // setGlobal(res.data.user);
            navigate('/DashMain');
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Invalid credentials. Please try again.');
            } else if (error.request) {
                setErrorMessage('No response from the server. Please try again.');
            } else {
                setErrorMessage('Request setup error. Please try again.');
            }
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url("assets/img/bglogin.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div style={{
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
            }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
                {errorMessage && <div style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f8d7da', color: '#721c24' }}>{errorMessage}</div>}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        required
                    />
                    <button
                        type="submit"
                        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
