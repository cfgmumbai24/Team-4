import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>about us</title>
    {/* font awesome cdn link  */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    />
    {/* custom css file link  */}
    <link rel="stylesheet" href="css/style.css" />
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
    <br />
    <h1 id="gal">Success Stories</h1>
    <br />
    <section className="gallery">
      <div className="image-container">
        <img src="assets/img/tourism.jpg" className="im" alt="Image 1" />
        <img src="assets/img/medical.jpg" className="im" alt="Image 2" />
        <img src="assets/img/fashion.jpg" className="im" alt="Image 3" />
        <img src="assets/img/engi.jpg" className="im" alt="Image 4" />
        <img src="assetsimg/agri.jpg" className="im" alt="Image 5" />
      </div>
    </section>
    <footer className="footer">
      © <span>Margshala</span> | All Rights Reserved to Margshala.
    </footer>
    {/* custom js file link  */}
  </>
  </div>
  )
}
