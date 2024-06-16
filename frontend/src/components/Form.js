import React from 'react'
import { Link } from 'react-router-dom'
export const Form = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form</title>
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
          <h3 className="name">Navsanjeevan Social Trust</h3>
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
    <div id="imp">
      <h2 id="ford">Details</h2>
      <div id="gen">
        <form action="form.php">
          <br />
          <ab> Name:</ab>
          <br />
          <br />
          <input className="col" type="text" placeholder="Enter your Name" />
          <br />
          <br />
          <ab> Gender </ab> <br />
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" defaultValue="male" />{" "}
            Male
          </label>
          <br />
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" defaultValue="female" />{" "}
            Female
          </label>
          <br />
          <label htmlFor="others">
            <input type="radio" id="others" name="gender" defaultValue="others" />{" "}
            Others
          </label>
          <br />
          <br />
          <ab> Address: </ab>
          <br />
          <br />
          <input className="col" type="text" placeholder="Address" />
          <br />
          <br />
          <ab> Phone Number </ab> <br />
          <br />
          <input className="col" type="text" placeholder="Phone Number" />
          <br />
          <br />
          <ab> Course(s): </ab>
          <br />
          <input type="checkbox" name="course[]" defaultValue="HTML Tutorial" />
          Agriculture
          <br />
          <input
            type="checkbox"
            name="course[]"
            defaultValue="CSS Tutorial"
          />{" "}
          Engineering
          <br />
          <input
            type="checkbox"
            name="course[]"
            defaultValue="React Tutorial"
          />{" "}
          Medical
          <br />
          <input
            type="checkbox"
            name="course[]"
            defaultValue="Horiculture"
          />{" "}
          Fashion
          <br />
          <input type="checkbox" name="course[]" defaultValue="Food Processing" />
          Tourism <br />
          <input id="sub" type="submit" defaultValue="Submit" />
        </form>
      </div>
    </div>
    <footer className="footer">
      © copyright @ 2022 by <span>Margshala</span> | all rights reserved!
    </footer>
    {/* custom js file link  */}
  </>
  </div>
  )
}
