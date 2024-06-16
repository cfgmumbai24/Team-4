import React from 'react'
import { Link } from 'react-router-dom'

export const Playlist = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>video playlist</title>
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
    <section className="playlist-details">
      <h1 className="heading">playlist details</h1>
      <div className="row">
        <div className="column">
          <form action="" method="post" className="save-playlist">
            <button type="submit">
              <i className="far fa-bookmark" /> <span>save playlist</span>
            </button>
          </form>
          <div className="thumb">
            <img src="assets/img/fashion.jpg" alt="" />
            <span>10 videos</span>
          </div>
        </div>
        <div className="column">
          <div className="tutor">
            <img src="assets/img/pic-2.jpg" alt="" />
            <div>
              <h3>john doe</h3>
              <span>21-10-2022</span>
            </div>
          </div>
          <div className="details">
            <h3>Fashion tutorial</h3>
            <p>
              This Playlist consists of all the essentials required for fashion In
              6 tutorials.
            </p>
            {/* <a href="teacher_profile.html" className="inline-btn">
              view profile
            </a> */}
          </div>
        </div>
      </div>
    </section>
    <section className="playlist-videos">
      <h1 className="heading">playlist videos</h1>
      <div className="box-container">
        <a className="box" href="https://res.cloudinary.com/dcuebvwvx/video/upload/v1718470371/ffosp3bii7onpwcwtg0c.mp4">
          <i className="fas fa-play" />
          <img src="assets/img/fashion.jpg" alt="" />
          <h3>Fashion tutorial (part 01)</h3>
        </a>
        <a className="box" href="https://res.cloudinary.com/dcuebvwvx/video/upload/v1718470371/ffosp3bii7onpwcwtg0c.mp4">
          <i className="fas fa-play" />
          <img src="assets/img/fashion.jpg" alt="" />
          <h3>Fashion tutorial (part 02)</h3>
        </a>
        <a className="box" href="https://res.cloudinary.com/dcuebvwvx/video/upload/v1718470371/ffosp3bii7onpwcwtg0c.mp4">
          <i className="fas fa-play" />
          <img src="assets/img/fashion.jpg" alt="" />
          <h3>Fashion tutorial (part 03)</h3>
        </a>
        <a className="box" href="https://res.cloudinary.com/dcuebvwvx/video/upload/v1718470371/ffosp3bii7onpwcwtg0c.mp4">
          <i className="fas fa-play" />
          <img src="assets/imgfashion.jpg" alt="" />
          <h3>Fashion tutorial (part 04)</h3>
        </a>
        <a className="box" href="https://res.cloudinary.com/dcuebvwvx/video/upload/v1718470371/ffosp3bii7onpwcwtg0c.mp4">
          <i className="fas fa-play" />
          <img src="assets/img/fashion.jpg" alt="" />
          <h3>Fashion tutorial (part 05)</h3>
        </a>
        <a className="box" href="https://res.cloudinary.com/dcuebvwvx/video/upload/v1718470371/ffosp3bii7onpwcwtg0c.mp4">
          <i className="fas fa-play" />
          <img src="assets/img/fashion.jpg" alt="" />
          <h3>Fashion tutorial (part 06)</h3>
        </a>
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
