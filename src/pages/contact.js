import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout>
            <Helmet>
                <title>Contact | Ashley Howard | Bespoke Web Design and Development</title>
                <link rel="canonical" href="https://ashley.how/contact" />
            </Helmet>
            <Header headerText="Contact page" />
            <p>Send us a message!</p>
        </Layout>
    )
}