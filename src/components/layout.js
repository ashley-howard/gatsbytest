import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer";
import Menu from "./menu"
import SocialLinks from './SocialLinks'

export default function Layout({ theme, children }) {

    let whichTheme;

    if (!theme) {
        whichTheme = "primary"
    } else {
        whichTheme = theme;
    }

    return (

        <div className="container">
            <Helmet>
                <body className={whichTheme}></body>
            </Helmet>

            <Menu />

            <SocialLinks />

            {children}

            <Footer />
        </div>

    )
}