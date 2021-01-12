import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
    return (
        <Layout>
            <Helmet>
                <title>About | Ashley Howard | Bespoke Web Design and Development</title>
                <link rel="canonical" href="https://ashley.how/contact" />
            </Helmet>
            <Header headerText="About page" />
            <p>Such wow. Very React.</p>
        </Layout>
    )
}