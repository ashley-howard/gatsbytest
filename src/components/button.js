import { Link } from "gatsby";
import React from "react"

function BtnLink(props) {
    return <Link className={props.color} to={props.url}>{props.text}</Link>;
}

function BtnA(props) {
    return <a className={props.color} href={props.url}>{props.text}</a>;
}

export default function Button(props) {
    if (props.type === 'Link') {
        return <BtnLink color={props.color} url={props.url} text={props.text} />;
    }
    return <BtnA color={props.color} url={props.url} text={props.text} />;
}