import React from "react"
import { Helmet } from "react-helmet"
import Button from "../components/Button"
import Layout from "../components/layout"
import imgMeyo from "../img/portfolio/meyo.png"
import imgSearchGif from "../img/search.gif"
import imgCollab from "../img/collab.gif"
import ReadyToChat from "../components/ReadyToChat"
import Testimonials from "../components/Testimonials"

class Home extends React.Component {
  render() {
    return (
      <Layout theme={"to-secondary"}>
        <Helmet>
          <body id="index"></body>
          <title>Web Designer East London | Ashley Howard | Bespoke Web Design and Development</title>
          <link rel="canonical" href="https://ashley.how" />
        </Helmet>

        <div className="container">
          <main>
            <div className="inner-container">

              <div className="column left">
                <h1>
                  I create websites that
               
                  <span className="hero-span">help small businesses stand out,</span>
              using simple and intuitive design.
              </h1>

                <p>Bespoke websites from scratch that are modern, mobile-friendly, affordable, as well as matching your personality.</p>

                <hr />

                <div className="links">
                  <Button color="primary" url="mailto:contact@ashley.how" text="say hello"></Button>
                  <Button color="secondary" url="/about" text="about me"></Button>
                </div>
              </div>

              {/* <div className="column right">
              <div className="img-container">
                <img src="assets/img/portrait.jpg" alt="" />
              </div>
            </div> */}

            </div>
          </main>

          <section className="two-columns secondary" id="style">
            <div className="column column-1">
              <h2>I help you get your shop online <span className="decorative">in style</span></h2>
              <p>With plans to help those affected by COVID, every business deserves a fresh, modern website, that fits their business.</p>
              <div className="links">
                <Button color="secondary" url="/services" text="view my services"></Button>
              </div>
            </div>

            <div className="column column-2">
              <img src={imgMeyo} alt="" />
            </div>
          </section>

          <section className="two-columns" id="research">
            <div className="column column-1">
              <img src={imgSearchGif} alt="" />
            </div>

            <div className="column column-2">

              <h2>I help you get your shop online <span className="decorative">in style</span></h2>
              <p>With plans to help those affected by COVID, every business deserves a fresh, modern website, that fits their business.</p>
              <div className="links">
                <Button color="secondary" url="/services" text="view my services"></Button>
              </div>
            </div>
          </section>

          <section className="two-columns" id="collab">
            <div className="column column-1">
              <h2>Let's design your perfect website <span className="decorative">together</span></h2>
              <p>Using the latest and greatest online collaborative tools, we'll go through six steps together, the final result...</p>
              <p>We can even work on your website without leaving the house, so grab your favourite hot beverage and let's work together.</p>
              <div className="links">
                <Button color="secondary" url="/services" text="view my services"></Button>
              </div>
            </div>

            <div className="column column-2">
              <img src={imgCollab} alt="" />
            </div>
          </section>
        </div>

        {/* <Testimonials /> */}

        <ReadyToChat />

        <div className="square"></div>
      </Layout>
    )
  }
}

export default Home;