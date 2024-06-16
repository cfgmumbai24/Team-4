import React from 'react'
import { Link } from 'react-router-dom'

export const DashMain = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home</title>
  {/* font awesome cdn link  */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
  />
  {/* Owl corousal */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
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
      {/* <img src="assets\img\about-img.svg" className="image" alt="" /> */}

        <h3 className="name">Profile</h3>
        {/* <div className="flex-btn">
          <a href="login.html" className="option-btn">
            login
          </a>
          <a href="register.html" className="option-btn">
            register
          </a>
        </div> */}
      </div>
    </section>
  </header>
  <div className="side-bar">
    <div id="close-btn">
      <i className="fas fa-times" />
    </div>
    <div className="profile">
      <img src="assets\img\Margshala-Logo.png" className="image" alt="" />
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
    <div className="container2">
      <div className="text-content">
        <h1>Find your perfect <span>course</span> and <span>grow</span> your
        skill</h1>
        <p>
        Margshala empowers rural youth to build sustainable local futures through entrepreneurship and self-learning. We provide the knowledge, skills, and resources needed for young people to become successful entrepreneurs, driving economic and social development in their communities. 
        By fostering a culture of continuous education and innovation, we aim to bridge educational gaps and promote sustainable growth in rural areas.
        </p>
      </div>
      <div className="picc">
        <img id="" src="assets\img\Aboutus.png" alt="Learning Image" />
      </div>
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



