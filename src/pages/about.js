import React from "react"
import { Helmet } from "react-helmet"
import BackDrop from "../components/BackDrop"
import Header from "../components/header"
import Layout from "../components/layout"
import imgNotComplicated from "../img/not-complicated.png"
import imgPlaceholder from "../img/portfolio/placeholder.svg"
import img from "../img/portfolio/meyo.png"
import ReadyToChat from "../components/ReadyToChat"
import Testimonials from "../components/Testimonials"

export default function About() {
    return (
        <Layout theme={"secondary"}>
            <Helmet>
                <title>About | Ashley Howard | Bespoke Web Design and Development</title>
                <link rel="canonical" href="https://ashley.how/contact" />
            </Helmet>

            <div className="container">
                <section id="about-intro">
                    <img src={imgNotComplicated} alt="" />
                </section>

                <section id="about-me">
                    <h3>About me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis purus metus, at ornare ex tristique sed.
                    Nulla semper ante quis ex pretium consequat. Sed tempor interdum tellus eget feugiat.
                        Duis bibendum magna non lobortis sollicitudin.</p>

                    <div className="steps">
                        <div className="column">
                            <h4>Chat</h4>
                            <div className="content">
                                <div className="number">1</div>
                                <p>First we'll talk as much as possible about your business.</p>
                            </div>
                        </div>
                        <div className="column">
                            <h4>Research</h4>
                            <div className="content">
                                <div className="number">2</div>
                                <p>First we'll talk as much as possible about your business.</p>
                            </div>
                        </div>
                        <div className="column">
                            <h4>Design</h4>
                            <div className="content">
                                <div className="number">3</div>
                                <p>First we'll talk as much as possible about your business.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <BackDrop
                text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis purus metus, at ornare ex tristique sed.”"
                img={img}
            />

            <div className="container">
                <section id="philosophy">
                    {/* <h3>My philosophy</h3> */}

                    <div className="quote">
                        <ul>
                            <li>I believe in creating big ideas from small ideas.</li>
                            <li>In that through simplicity we can say as much as we need to.</li>
                            <li>In that perfectionism isn't a drawback but something that can work to your advantage.</li>
                            <li>In experimenting to reach new heights.</li>
                        </ul>
                    </div>
                </section>
            </div>

            <Testimonials />

            <ReadyToChat />

        </Layout>
    )
}