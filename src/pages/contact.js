import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout theme={"secondary"}>
            <Helmet>
                <title>Contact | Ashley Howard | Bespoke Web Design and Development</title>
                <link rel="canonical" href="https://ashley.how/contact" />
            </Helmet>
            
            <div className="container">
                <Header headerText="Contact page" />
                <p>Send us a message!</p>
            </div>

        </Layout>
    )
}