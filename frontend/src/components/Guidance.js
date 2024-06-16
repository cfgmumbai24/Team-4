import React from 'react'
import { Link } from 'react-router-dom'

export const Guidance = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mentoring Session</title>
  {/* Font Awesome CDN link */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
  />
  {/* Custom CSS file link */}
  <link rel="stylesheet" href="css/style.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .guidance-container {\n        text-align: center;\n        margin: 40px 0;\n      }\n\n      .guidance-btn {\n        display: inline-block;\n        margin: 20px;\n        padding: 15px 30px;\n        background-color: #4caf50;\n        color: white;\n        border: none;\n        cursor: pointer;\n        font-size: 20px; /* Increased font size */\n        border-radius: 5px;\n        transition: background-color 0.3s;\n      }\n\n      .guidance-btn:hover {\n        background-color: #45a049;\n      }\n\n      .guidance-section {\n        display: none;\n        margin: 20px auto;\n        padding: 20px;\n        border: 1px solid #ddd;\n        border-radius: 5px;\n        background-color: #f9f9f9;\n        max-width: 800px;\n        text-align: left;\n        font-size: medium;\n      }\n\n      .guidance-section.active {\n        display: block;\n      }\n\n      .guidance-section h3 {\n        margin-top: 0;\n      }\n\n      .guidance-section ul {\n        padding-left: 20px;\n      }\n\n      .guidance-section ul li {\n        margin-bottom: 10px;\n      }\n      .footer {\n        bottom: 0px;\n        position: fixed;\n      }\n\n      @media (max-width: 600px) {\n        .guidance-btn {\n          font-size: 18px; /* Adjusted font size for smaller screens */\n          padding: 10px 20px;\n        }\n\n        .guidance-section {\n          padding: 15px;\n        }\n      }\n    "
    }}
  />
  <header className="header">
    <section className="flex">
      <a href="home.html" className="logo">
        Margshala
      </a>
      <div className="icons">
        <div id="menu-btn" className="fas fa-bars" />
        <div id="search-btn" className="fas fa-search" />
        <div id="user-btn" className="fas fa-user" />
        <div id="toggle-btn" className="fas fa-sun" />
      </div>
      <div className="profile">
        <img src="assets/img/Margshala-Logo.png" className="image" alt="" />
        <h3 className="name">Profile</h3>
        <div className="flex-btn">
          <a href="login.html" className="option-btn">
            login
          </a>
          <a href="register.html" className="option-btn">
            register
          </a>
        </div>
      </div>
    </section>
  </header>
  <div className="side-bar">
    <div id="close-btn">
      <i className="fas fa-times" />
    </div>
    <div className="profile">
      <img src="assets/img/Margshala-Logo.png" className="image" alt="" />
      <h3 className="name">Margshala</h3>
    </div>
    <nav className="navbar">
     {/* <Link to="/DashMain">
        <i className="fas fa-home" />
        <span>Home</span>
        </Link> */}
      <Link to="/SuccessStories">
        <i className="fas fa-question" />
        <span>Success Stories</span>
        </Link>

      <Link to="/Dashboard">
        <i className="fa-solid fa-chart-line" />
        <span>Dashboard</span>
        </Link>
        <Link to="/Guidance">
        <i className="fas fa-chalkboard-user" />
        <span>Guidance</span>
        </Link>
      
        <Link to="/Courses">
        <i className="fas fa-graduation-cap" />
        <span>Courses</span>
      </Link>
      <Link to="/Teachers">
        <i className="fas fa-chalkboard-user" />
        <span>teachers</span>
      </Link>
      <Link to="/Contact">
        <i className="fas fa-headset" />
        <span>Contact us</span>
      </Link>
    </nav>
  </div>
  <section className="guidance">
    <div className="guidance-container">
      <button className="guidance-btn" id="online-btn">
        Connect
      </button>
    </div>
    <div className="guidance-section" id="online-section">
      <h3>Connect with your peers</h3>
      <button className="guidance-btn" id="online-btn">
        Agriculture
      </button>
      <button className="guidance-btn" id="online-btn">
        Engineering
      </button>
      <button className="guidance-btn" id="online-btn">
        Tourism
      </button>
      <button className="guidance-btn" id="online-btn">
        Fashion
      </button>
      <button className="guidance-btn" id="online-btn">
        Medical
      </button>
    </div>
  </section>
  <footer className="footer">
    © <span>navsanjeevan.</span> | All Rights Reserved to
    Navsanjeevansocialtrust.
  </footer>
  {/* Custom JS file link */}
</>

    </div>
  )
}
