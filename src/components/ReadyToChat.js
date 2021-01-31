import React from 'react'
import Button from './Button'

function ReadyToChat() {
    return (
        <section id="ready-to-chat">
            <h3>Ready to chat?</h3>
            <p>Let's talk about your idea, and see if we're a fit.</p>
            <div className="links">
                <Button color="primary" url="mailto:contact@ashley.how" text="get in touch" />
            </div>
        </section>
    )
}

export default ReadyToChat