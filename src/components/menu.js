import React from "react"
import { Link } from "gatsby"

export default function Menu() {
    return (
        <nav>
            <Link to="/" activeClassName="active">home</Link>
            <Link to="/about" activeClassName="active">about</Link>
            <Link to="/services" activeClassName="active">services</Link>
            <Link to="/portfolio" activeClassName="active">portfolio</Link>
            <Link to="/contact" activeClassName="active">contact</Link>
        </nav>
    )
}