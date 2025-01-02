import ToyDetailsMessagePreview from "./ToyDetailsMessagePreview";

const ToyDetailsMessagesList = ({ toy, onDeleteMessage, isDisabled }) => {
    return (
        <section className="toy-details-messages-list">
            {(!toy.messages || toy.messages.length === 0) && <p>No messages yet</p>}
            {toy.messages && toy.messages.length > 0 && toy.messages.map(message =>
                <ToyDetailsMessagePreview
                    message={message}
                    isDisabled={isDisabled}
                    onDeleteMessage={onDeleteMessage}
                    key={message._id}
                />)}
        </section>
    )
}

export default ToyDetailsMessagesList;