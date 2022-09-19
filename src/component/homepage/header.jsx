import React from "react"
import "./homepage.css"
import ME from "../../assets/foto-modified-removebg-preview.png"
import { BsBookmarkCheck } from "react-icons/bs"
const About = () => {
  return (
    <section id="about">
      <h5>Trying Fetch API using Card </h5>
      <h2>by Afif Al Amin</h2>

      <div className="container about__container">
        <div className="about__left">
          <p>Hallo, my name Afif Al Amin. 7 </p>
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} className="foto" alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card-left">
              <BsBookmarkCheck className="about__icon" />
              <h5> 1</h5>
              <small>Routing URL POST</small>
            </article>

            <article className="about__card">
              <BsBookmarkCheck className="about__icon" />
              <h5> 2</h5>
              <small>Validation Active NavBar</small>
            </article>

            <article className="about__card-left">
              <BsBookmarkCheck className="about__icon" />
              <h5> 3</h5>
              <small>Popup Detail API POSTS</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
