import { Link } from "gatsby";
import React from "react"

function BtnLink(props) {
    return <Link className={props.color} to={props.url}>{props.text}</Link>;
}

function BtnA(props) {
    return <a className={props.color} href={props.url} target="_blank" rel="noopener noreferrer">{props.text}</a>;
}

export default function Button(props) {
    if (props.url.includes(':')) {
        return <BtnA color={props.color} url={props.url} text={props.text} />;
    }
    return <BtnLink color={props.color} url={props.url} text={props.text} />;
}