import React from "react"
import { Helmet } from "react-helmet"
import Button from "../components/button"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
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
              <Button type="a" color="primary" url="mailto:contact@ashley.how" text="say hello"></Button>
              <Button type="Link" color="secondary" url="/about" text="about me"></Button>
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

      <div>
        <Header headerText="Test Title" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium est quaerat amet, nulla nobis sapiente consequuntur commodi quibusdam odit nisi nihil veritatis maiores et molestias sed? Facilis, repudiandae atque.</p>
      </div>

      <a href="javascript:gaOptout();">Deactivate Google Analytics</a>
    </Layout>
  )
}