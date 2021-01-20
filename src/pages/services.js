import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Services() {
    return (
        <Layout theme={"primary"}>
            <Helmet>
                <body id="services"></body>
                <title>Services | Ashley Howard | Bespoke Web Design and Development</title>
                <link rel="canonical" href="https://ashley.how/services" />
            </Helmet>

            <div className="container">
                <Header headerText="My six-step process" />

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
                    <div className="column">
                        <h4>Develop</h4>
                        <div className="content">
                            <div className="number">4</div>
                            <p>First we'll talk as much as possible about your business.</p>
                        </div>
                    </div>
                    <div className="column">
                        <h4>Deploy</h4>
                        <div className="content">
                            <div className="number">5</div>
                            <p>First we'll talk as much as possible about your business.</p>
                        </div>
                    </div>
                    <div className="column">
                        <h4>Aftercare</h4>
                        <div className="content">
                            <div className="number">6</div>
                            <p>First we'll talk as much as possible about your business.</p>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}