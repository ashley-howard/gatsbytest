import React from "react"
import { Helmet } from "react-helmet"
import Button from "../components/Button"
import Layout from "../components/layout"
import imgMeyo from "../img/portfolio/meyo.png"
import imgSearchGif from "../img/search.gif"
import imgCollab from "../img/collab.gif"

class Home extends React.Component {
  render() {
    return (
      <Layout theme={"to-secondary"}>
        <Helmet>
          <body id="index"></body>
          <title>Web Designer East London | Ashley Howard | Bespoke Web Design and Development</title>
          <link rel="canonical" href="https://ashley.how" />
        </Helmet>

        <main>
          <div className="inner-container">

            <div className="column left">
              <h1>
                <span>I create websites that</span>
                <span>help small businesses thrive</span>
              </h1>

              <p>I create bespoke websites from scratch that are modern, mobile-friendly, and affordable.</p>

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

        <div className="square"></div>
      </Layout>
    )
  }
}

export default Home;