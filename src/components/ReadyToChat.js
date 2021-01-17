import React from 'react'
import Button from './Button'

function ReadyToChat() {
    return (
        <section id="ready-to-chat">
            <h3>Ready to chat?</h3>
            <p>Let's talk about your idea, and see if we're a fit.</p>
            <div className="links small">
                <Button color="secondary" url="/services" text="view my services" />
            </div>
        </section>
    )
}

export default ReadyToChat