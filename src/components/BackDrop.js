import React from 'react'

function BackDrop(props) {
    return (
        <section className="backdrop" style={{ backgroundImage: `url(${props.img})` }}>
            <div className="filter"></div>
            <p>{props.text}</p>
        </section>
    )
}

export default BackDrop