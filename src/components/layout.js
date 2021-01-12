import React from "react"
import Menu from "./menu"
import SocialLinks from './social-links'

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <Menu />
            </header>

            <SocialLinks />

            {children}
        </div>
    )
}