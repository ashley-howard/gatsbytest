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
            <h1>{props.title}</h1>
        </div>
    )
}

export default ProjectHeader