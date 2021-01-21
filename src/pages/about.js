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
                    <Header headerText="About me" />

                    <p>
                        I’m Ash, and I was born and raised in East London. I’ve been a web designer and developer for well over 10 years now,
                        striving to create refreshing and modern websites, while maintaining my own style; usually something simple or minimalistic.
                       </p>
                    <p>
                        Since then I've been challenging myself to create unique (and sometimes quirky) websites, ranging from dog-themed and photorealistic
                        designs to portfolios and conversion websites. I'm always enthusiastic to start new projects with new people, while keeping my mind
                        (and fingertips) busy.
                        </p>
                    <p>
                        Being creative plays an important role in my life too, and I try to live every day as creatively as possible.
                        Music helps me a lot in the process, although I'm kinda stuck in the '90s... And when I'm trying to concentrate,
                        I go for lo-fi. I'm also passionate about technology (especially the latest gadgets), photography, and foreign languages.
                        </p>

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