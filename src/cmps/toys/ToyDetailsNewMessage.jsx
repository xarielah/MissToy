import { useState } from "react";

const ToyDetailsNewMessage = ({ onSubmitMessage, isDisabled }) => {
    const [message, setMessage] = useState('')

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitMessage(message)
        setMessage('')
    }

    return (
        <section className="toy-details-new-message">
            <form className="toy-details-new-message-form" onSubmit={handleSubmit}>
                <input className="input" value={message} onChange={handleMessageChange} type="text" placeholder="Enter your message" />
                <button className="btn" type="submit" disabled={isDisabled}>Send</button>
            </form>
        </section>
    )
}

export default ToyDetailsNewMessage;