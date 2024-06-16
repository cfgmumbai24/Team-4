import React from 'react'
import { Link } from 'react-router-dom'

export const Teachers = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>mentors</title>
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
        <img src="images/pic-1.jpg" className="image" alt="" />
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
    <section className="teachers">
      <h1 className="heading">Mentors</h1>
      <form action="" method="post" className="search-tutor">
        <input
          type="text"
          name="search_box"
          placeholder="search tutors..."
          required=""
          maxLength={100}
        />
        <button type="submit" className="fas fa-search" name="search_tutor" />
      </form>
      <div className="box-container">
        <div className="box offer">
          <h3>become a mentor</h3>
          <p>Contribute back to the society by mentoring the adventurers.</p>
          <a href="register.html" className="inline-btn">
            get started
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-2.jpg" alt="" />
            <div>
              <h3>john</h3>
              <span>mentor</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-3.jpg" alt="" />
            <div>
              <h3>mark</h3>
              <span>mentor</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-4.jpg" alt="" />
            <div>
              <h3>shriya</h3>
              <span>mentor</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-5.jpg" alt="" />
            <div>
              <h3>sarah</h3>
              <span>mentor</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-6.jpg" alt="" />
            <div>
              <h3 />
              <span>mentor</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-7.jpg" alt="" />
            <div>
              <h3>john deo</h3>
              <span>mentor</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
        <div className="box">
          <div className="tutor">
            <img src="assets/img/pic-8.jpg" alt="" />
            <div>
              <h3>john deo</h3>
              <span>mentor</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
      </div>
    </section>
    <footer className="footer">
      © copyright by <span>Margshala</span> | all rights reserved!
    </footer>
    {/* custom js file link  */}
  </>
  </div>
  )
}
