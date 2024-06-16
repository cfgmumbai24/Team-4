import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>profile</title>
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
        Navsanjeevan Social Trust, Pune
      </a>
      <div className="icons">
        <div id="menu-btn" className="fas fa-bars" />
        <div id="search-btn" className="fas fa-search" />
        <div id="user-btn" className="fas fa-user" />
        <div id="toggle-btn" className="fas fa-sun" />
      </div>
      <div className="profile">
        <img src="assets/img/Margshala-Logo.png" className="image" alt="" />
        <h3 className="name">shaikh anas</h3>
        <p className="role">studen</p>
        <a href="profile.html" className="btn">
          view profile
        </a>
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
  <section className="user-profile">
    <h1 className="heading">your profile</h1>
    <div className="info">
      <div className="user">
        <img src="images/pic-1.jpg" alt="" />
        <h3>shaikh anas</h3>
        <p>student</p>
        <a href="update.html" className="inline-btn">
          update profile
        </a>
      </div>
      <div className="box-container">
        <div className="box">
          <div className="flex">
            <i className="fas fa-bookmark" />
            <div>
              <span>4</span>
              <p>saved playlist</p>
            </div>
          </div>
          <a href="#" className="inline-btn">
            view playlists
          </a>
        </div>
        <div className="box">
          <div className="flex">
            <i className="fas fa-heart" />
            <div>
              <span>33</span>
              <p>videos liked</p>
            </div>
          </div>
          <a href="#" className="inline-btn">
            view liked
          </a>
        </div>
        <div className="box">
          <div className="flex">
            <i className="fas fa-comment" />
            <div>
              <span>12</span>
              <p>videos comments</p>
            </div>
          </div>
          <a href="#" className="inline-btn">
            view comments
          </a>
        </div>
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
