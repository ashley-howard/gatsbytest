import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'


function ProjectHeader(props) {

    return (
        <div className="project-header" style={{ backgroundImage: `url(${props.img})` }}>
            <Helmet>
                <body id="project"></body>
                <title>{props.title} | Ashley Howard | Bespoke Web Design and Development</title>
            </Helmet>

            <div className="filter"></div>

            <span>
                <Link to="/portfolio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z" /></svg>
                    Back to portfolio
                </Link>
            </span>

            <h1>{props.title}</h1>
        </div>
    )
}

export default ProjectHeader