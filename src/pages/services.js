import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Services() {
    return (
        <Layout>
            <Helmet>                
                <title>Services | Ashley Howard | Bespoke Web Design and Development</title>
                <link rel="canonical" href="https://ashley.how/services" />
            </Helmet>

            <Header headerText="Services" />

        </Layout>
    )
}