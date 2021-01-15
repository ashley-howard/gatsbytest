import React from "react"
import { Link } from "gatsby";

function ProjectFeatured(props) {
    let titleLink;
    if (props.url.includes(':')) {
        titleLink = <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
    } else {
        titleLink = <Link to={props.url}>{props.title}</Link>
    }

    let smartLink;
    if (props.url.includes(':')) {
        smartLink = <a href={props.url} target="_blank" rel="noopener noreferrer">Visit site</a>
    } else {
        smartLink = <Link to={props.url}>Read more</Link>
    }

    return (
        <div className="project">
            <div className="content">
                <h6>{props.type}</h6>
                <h2>{titleLink}</h2>
                <p>{props.desc}</p>
                <span>{props.tags}</span>
                {smartLink}
            </div>

            <div className="img-container">
                <img src={props.img} alt={props.alt} />
            </div>
        </div>
    )
}

function ProjectStandard(props) {
    let titleLink;
    if (props.url.includes(':')) {
        titleLink = <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
    } else {
        titleLink = <Link to={props.url} >{props.title}</Link>
    }

    let smartLink;
    if (props.url.includes(':')) {
        smartLink = <a href={props.url} target="_blank" rel="noopener noreferrer">Visit site</a>
    } else {
        smartLink = <Link to={props.url}>Read more</Link>
    }

    return (
        <div className="project">
            <div className="content" style={props.theme ? { backgroundColor: props.theme } : { backgroundColor: '#0F4567' }}>
                <h6>{props.type}</h6>
                <h2>{titleLink}</h2>
                <p>{props.desc}</p>
                <span>{props.tags}</span>
                {smartLink}
            </div>

            <div className="img-container">
                <img src={props.img} alt={props.alt} />
            </div>
        </div>
    )
}

export default function Project(props) {
    if (props.featured) {
        return <ProjectFeatured
            type={props.type}
            title={props.title}
            img={props.img}
            desc={props.desc}
            tags={props.tags}
            url={props.url}
        />;
    }
    return <ProjectStandard
        type={props.type}
        title={props.title}
        img={props.img}
        theme={props.theme} // enter css colour
        desc={props.desc}
        tags={props.tags}
        url={props.url}
    />;
}