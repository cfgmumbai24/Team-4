import React from 'react'
import { Link } from 'react-router-dom'

export const WatchVideo = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>watch</title>
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
  <section className="watch-video">
    <div className="video-container">
      <div className="video">
        <video
          src="assets/img/vid-1.mp4"
          controls=""
          poster="assets/img/fashion.jpg"
          id="video"
        />
      </div>
      <h3 className="title">Fashion tutorial (part 01)</h3>
      <div className="info">
        <p className="date">
          <i className="fas fa-calendar" />
          <span>22-10-2022</span>
        </p>
        <p className="date">
          <i className="fas fa-heart" />
          <span>44 likes</span>
        </p>
      </div>
      <div className="tutor">
        <img src="assets/img/pic-2.jpg" alt="" />
        <div>
          <h3>john deo</h3>
          <span>developer</span>
        </div>
      </div>
      <form action="" method="post" className="flex">
        <a href="playlist.html" className="inline-btn">
          view playlist
        </a>
        <button>
          <i className="far fa-heart" />
          <span>like</span>
        </button>
      </form>
      <p className="description">
        This tutorial is a part of 6 tutorials given under Fashion playlist.
      </p>
    </div>
  </section>
  <section className="comments">
    <h1 className="heading">5 comments</h1>
    <form action="" className="add-comment">
      <h3>add comments</h3>
      <textarea
        name="comment_box"
        placeholder="enter your comment"
        required=""
        maxLength={1000}
        cols={30}
        rows={10}
        defaultValue={""}
      />
      <input
        type="submit"
        defaultValue="add comment"
        className="inline-btn"
        name="add_comment"
      />
    </form>
    <h1 className="heading">user comments</h1>
    <div className="box-container">
      <div className="box">
        <div className="user">
          <img src="assets/img/Margshala-Logo.png" alt="" />
          <div>
            <h3>shaikh anas</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">this is a comment form shaikh anas</div>
        <form action="" className="flex-btn">
          <input
            type="submit"
            defaultValue="edit comment"
            name="edit_comment"
            className="inline-option-btn"
          />
          <input
            type="submit"
            defaultValue="delete comment"
            name="delete_comment"
            className="inline-delete-btn"
          />
        </form>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/img/pic-2.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">awesome tutorial! keep going!</div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/img/pic-3.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">
          amazing way of teaching! thank you so much!
        </div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/img/pic-4.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">loved it, thanks for the tutorial!</div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/img/pic-5.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">
          this is what I have been looking for! thank you so much!
        </div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/img/pic-2.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">thanks for the tutorial!</div>
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
