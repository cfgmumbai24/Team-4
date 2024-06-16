import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>home</title>
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
  <section className="home-grid">
    <h1 className="heading">quick options</h1>
    <div className="box-container">
      <div className="box">
        <h3 className="title">likes and comments</h3>
        <p className="likes">
          total likes : <span>25</span>
        </p>
        <a href="watch-video.html" className="inline-btn">
          view likes
        </a>
        <p className="likes">
          total comments : <span>12</span>
        </p>
        <a href="watch-video.html" className="inline-btn">
          view comments
        </a>
        <p className="likes">
          saved playlists : <span>4</span>
        </p>
        <a href="playlist.html" className="inline-btn">
          view playlists
        </a>
      </div>
      <div className="box">
        <h3 className="title">top categories</h3>
        <div className="flex">
          <a href="courses.html">
            <i className="fas fa-code" />
            <span>Agriculture</span>
          </a>
          <a href="courses.html">
            <i className="fas fa-chart-simple" />
            <span>Medical</span>
          </a>
          <a href="courses.html">
            <i className="fas fa-pen" />
            <span>Engineering</span>
          </a>
          <a href="courses.html">
            <i className="fas fa-chart-line" />
            <span>Tourism</span>
          </a>
          <a href="courses.html">
            <i className="fas fa-cog" />
            <span>Fashion</span>
          </a>
        </div>
      </div>
      <div className="box">
        <h3 className="title">become a tutor</h3>
        <p className="tutor">
          Contribute back to the society by mentoring the adventurers.
        </p>
        <a href="teachers.html" className="inline-btn">
          get started
        </a>
      </div>
      <div className="box">
        <h3 className="title">Course Progress</h3>
        <div className="flex">
          <div className="skills-area">
            <div className="skill">
              <div className="skill-title">Agriculture</div>
              <div className="skill-bar" />
              <div className="html skill-fill">
                <span className="skill-percent">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    ©<span>Margshala</span> | All Rights Reserved to Margshala.
  </footer>
  {/* custom js file link  */}
</>

    </div>
  )
}
