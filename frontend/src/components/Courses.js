import React from 'react'
import { Link } from 'react-router-dom'

export const Courses = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>courses</title>
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
    <section className="courses">
      <h1 className="heading">our courses</h1>
      <div className="box-container">
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-2.jpg" alt="" />
            <div className="info">
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="assets/img/fashion.jpg" alt="" />
            <span>10 videos</span>
          </div>
          <h3 className="title">Fashion</h3>
          <a href="playlist.html" className="inline-btn">
            view playlist
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-3.jpg" alt="" />
            <div className="info">
              <h3>james</h3>
              <span>2-01-2023</span>
            </div>
          </div>
          <div className="thumb">
            <img src="assets/img/medical.jpg" alt="" />
            <span>10 videos</span>
          </div>
          <h3 className="title">Medical</h3>
          <a href="playlist.html" className="inline-btn">
            view playlist
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-4.jpg" alt="" />
            <div className="info">
              <h3>Harry</h3>
              <span>2-04-2023</span>
            </div>
          </div>
          <div className="thumb">
            <img src="assets/img/engi.jpg" alt="" />
            <span>10 videos</span>
          </div>
          <h3 className="title">Engineering</h3>
          <a href="playlist.html" className="inline-btn">
            view playlist
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-5.jpg" alt="" />
            <div className="info">
              <h3>Sara</h3>
              <span>13-10-2023</span>
            </div>
          </div>
          <div className="thumb">
            <img src="assets/img/tourism.jpg" alt="" />
            <span>10 videos</span>
          </div>
          <h3 className="title">Tourism</h3>
          <a href="playlist.html" className="inline-btn">
            view playlist
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-6.jpg" alt="" />
            <div className="info">
              <h3>Michael</h3>
              <span>2-06-2022</span>
            </div>
          </div>
          <div className="thumb">
            <img src="assets/img/agri.jpg" alt="" />
            <span>10 videos</span>
          </div>
          <h3 className="title">Agriculture</h3>
          <a href="playlist.html" className="inline-btn">
            view playlist
          </a>
        </div>
      </div>
    </section>
    <footer className="footer">
      © <span>navsanjeevan</span> | All Rights Reserved to
      Navsanjeevansocialtrust.
    </footer>
    {/* custom js file link  */}
  </>
  </div>
  )
}
