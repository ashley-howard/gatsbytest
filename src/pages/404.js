import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function pageNotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Web Designer East London | Ashley Howard | Bespoke Web Design and Development</title>
        <link rel="canonical" href="https://ashley.how" />
      </Helmet>

      <h1>Page not found</h1>

    </Layout>
  )
}