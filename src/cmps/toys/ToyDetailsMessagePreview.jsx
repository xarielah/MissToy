import { useSelector } from "react-redux";

const ToyDetailsMessagePreview = ({ message, onDeleteMessage, isDisabled }) => {
    const user = useSelector(state => state.userModule.user)

    return (
        <div className="toy-details-message-preview">
            {user && message.by._id === user._id && <button disabled={isDisabled} onClick={() => onDeleteMessage(message._id)}>Delete</button>}
            <span className="toy-message-preview-by">{message.by.fullname}</span>
            <p>{message.text}</p>
        </div>
    )
}

export default ToyDetailsMessagePreview;