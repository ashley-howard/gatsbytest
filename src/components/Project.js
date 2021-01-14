import React from "react"
import { Link } from "gatsby";

function ProjectFeatured(props) {
    let whichLink;
    if (props.url.includes(':')) {
        whichLink = <a href={props.url}>Visit site</a>
    } else {
        whichLink = <Link to={props.url}>Read more</Link>
    }

    return (
        <div className="project">
            <div className="content">
                <h6>{props.type}</h6>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <span>{props.tags}</span>
                {whichLink}
            </div>

            <div className="img-container">
                <img src={props.img} alt={props.alt} />
            </div>
        </div>
    )
}

function ProjectStandard(props) {
    let whichLink;
    if (props.url.includes(':')) {
        whichLink = <a href={props.url}>Visit site</a>
    } else {
        whichLink = <Link to={props.url}>Read more</Link>
    }
    
    return (
        <div className="project" style={props.theme ? { backgroundColor: props.theme } : { backgroundColor: '#CFDAE0' }}>
            <div className="content">
                <h6>{props.type}</h6>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <span>{props.tags}</span>
                {whichLink}
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