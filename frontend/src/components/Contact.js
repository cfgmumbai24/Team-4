import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us</title>
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
        "\n      .hover-container {\n        position: relative;\n        width: 100%;\n        max-width: 600px;\n        height: auto;\n      }\n\n      .hover-container img {\n        width: 100%;\n        height: auto;\n        transition: opacity 0.3s;\n      }\n\n      .hover-container .map-image {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        transition: opacity 0.3s;\n      }\n\n      .hover-container:hover .map-image {\n        opacity: 1;\n      }\n\n      .hover-container:hover img:not(.map-image) {\n        opacity: 0;\n      }\n    "
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
        <img src="assets/imgMargshala.png" className="image" alt="" />
        <h3 className="name">Margshala</h3>
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
  <section className="contact">
    <div className="row">
      <div className="hover-container">
        <img src="assets/img/contact-img.svg" alt="Contact Image" />
        <img src="assets/img/pic-10.png" alt="Google Map" className="map-image" />
      </div>
      <form action="" method="post">
        <h3>Get in touch</h3>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          required=""
          maxLength={50}
          className="box"
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required=""
          maxLength={50}
          className="box"
        />
        <input
          type="number"
          placeholder="Enter your number"
          name="number"
          required=""
          maxLength={50}
          className="box"
        />
        <textarea
          name="msg"
          className="box"
          placeholder="Enter your message"
          required=""
          maxLength={1000}
          cols={30}
          rows={10}
          defaultValue={""}
        />
        <input
          type="submit"
          defaultValue="Send message"
          className="inline-btn"
          name="submit"
        />
      </form>
    </div>
    <div className="box-container">
      <div className="box">
        <i className="fas fa-phone" />
        <h3>Phone number</h3>
        <a href="tel:+91-9579497440">+91-9579497440</a>
      </div>
      <div className="box">
        <i className="fas fa-envelope" />
        <h3>Email address</h3>
        <a href="mailto:nst@navsanjeevansocialtrust.org">
          nst@navsanjeevansocialtrust.org
        </a>
      </div>
      <div className="box">
        <i className="fas fa-map-marker-alt" />
        <h3>Office address</h3>
        <a href="#">
          405, Reelicon Elan Vidya valley school road sus gaon Pune 411021
        </a>
      </div>
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
