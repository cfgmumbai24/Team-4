import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate('/signup');
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',  // Align content to the bottom
            alignItems: 'flex-start',   // Align items to the left
            minHeight: '100vh',         // Ensure full viewport height coverage
            backgroundColor: '#f5f5f5',
            backgroundImage: 'url("assets/img/busland.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '20px',            // Add padding to center content and buttons
            paddingLeft: '20px',        // Additional left padding for aligning buttons to the left
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', width: '100%' }}>
                {/* Adjusted button styles with smaller size */}
                <div className="landing-button" onClick={navigateToSignUp} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '5px', padding: '15px', backgroundColor: '#ff69b4', marginBottom: '10px', width: '80%' }}>
                    <i className="fas fa-user-plus" style={{ fontSize: '40px', color: '#fff' }}></i>
                    <p style={{ marginTop: '10px', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Sign Up</p>
                </div>
                <div className="landing-button" onClick={navigateToLogin} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '5px', padding: '15px', backgroundColor: '#007bff', width: '80%' }}>
                    <i className="fas fa-sign-in-alt" style={{ fontSize: '40px', color: '#fff' }}></i>
                    <p style={{ marginTop: '10px', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Login</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
