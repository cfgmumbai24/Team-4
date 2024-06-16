import React from 'react'
import { Link } from 'react-router-dom'

export const TeachersProfile = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>tutor profile</title>
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
        Educa.
      </a>
      <form action="search.html" method="post" className="search-form">
        <input
          type="text"
          name="search_box"
          required=""
          placeholder="search courses..."
          maxLength={100}
        />
        <button type="submit" className="fas fa-search" />
      </form>
      <div className="icons">
        <div id="menu-btn" className="fas fa-bars" />
        <div id="search-btn" className="fas fa-search" />
        <div id="user-btn" className="fas fa-user" />
        <div id="toggle-btn" className="fas fa-sun" />
      </div>
      <div className="profile">
        <img src="assets/img/Margshala-Logo.jpg" className="image" alt="" />
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
      <img src="assets/img/Margshala-Logo.jpg" className="image" alt="" />
      <h3 className="name">shaikh anas</h3>
      <p className="role">studen</p>
      <a href="profile.html" className="btn">
        view profile
      </a>
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
  <section className="teacher-profile">
    <h1 className="heading">profile details</h1>
    <div className="details">
      <div className="tutor">
        <img src="assets/img/pic-2.jpg" alt="" />
        <h3>john deo</h3>
        <span>developer</span>
      </div>
      <div className="flex">
        <p>
          total playlists : <span>4</span>
        </p>
        <p>
          total videos : <span>18</span>
        </p>
        <p>
          total likes : <span>1208</span>
        </p>
        <p>
          total comments : <span>52</span>
        </p>
      </div>
    </div>
  </section>
  <section className="courses">
    <h1 className="heading">our courses</h1>
    <div className="box-container">
      <div className="box">
        <div className="thumb">
          <img src="assets/img/thumb-1.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete HTML tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="thumb">
          <img src="assets/img/thumb-2.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete CSS tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="thumb">
          <img src="assets/img/thumb-3.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete javascript tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          view playlist
        </a>
      </div>
      <div className="box">
        <div className="thumb">
          <img src="assets/img/thumb-4.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete Boostrap tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          view playlist
        </a>
      </div>
    </div>
  </section>
</>

    </div>
  )
}
