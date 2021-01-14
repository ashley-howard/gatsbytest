import React from "react"
import { Helmet } from "react-helmet"
import Button from "../components/Button"
import Layout from "../components/layout"

class Home extends React.Component {

  // componentDidMount() {
  //   setTimeout(function () {
  //     document.getElementById('page-transition').style.display = "none"
  //   }, 2000);
  // };

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Web Designer East London | Ashley Howard | Bespoke Web Design and Development</title>
          <link rel="canonical" href="https://ashley.how" />
        </Helmet>

        <main>
          <div className="container">

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

            <div className="column right">
              <div className="img-container">
                <img src="assets/img/portrait.jpg" alt="" />
              </div>
            </div>

          </div>

          <div className="square"></div>
        </main>

      </Layout>
    )
  }
}

export default Home;