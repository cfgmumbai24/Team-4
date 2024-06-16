import React from 'react'
import { Link } from 'react-router-dom'

export const Update = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>update</title>
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
      <a href="home.html" className="logo">
        Navsanjeevan Social Trust, Pune
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
      <img src="assets/img/Margshala-Logo.png" className="image" alt="" />
      <h3 className="name">Navsanjeevan Social Trust</h3>
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
  <section className="form-container">
    <form action="" method="post" encType="multipart/form-data">
      <h3>update profile</h3>
      <p>update name</p>
      <input
        type="text"
        name="name"
        placeholder="shaikh anas"
        maxLength={50}
        className="box"
      />
      <p>update email</p>
      <input
        type="email"
        name="email"
        placeholder="shaikh@gmail.come"
        maxLength={50}
        className="box"
      />
      <p>previous password</p>
      <input
        type="password"
        name="old_pass"
        placeholder="enter your old password"
        maxLength={20}
        className="box"
      />
      <p>new password</p>
      <input
        type="password"
        name="new_pass"
        placeholder="enter your old password"
        maxLength={20}
        className="box"
      />
      <p>confirm password</p>
      <input
        type="password"
        name="c_pass"
        placeholder="confirm your new password"
        maxLength={20}
        className="box"
      />
      <p>update pic</p>
      <input type="file" accept="image/*" className="box" />
      <input
        type="submit"
        defaultValue="update profile"
        name="submit"
        className="btn"
      />
    </form>
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
