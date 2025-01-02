import { useSelector } from "react-redux";
import ToyDetailsMessagesList from "./ToyDetailsMessagesList";
import ToyDetailsNewMessage from "./ToyDetailsNewMessage";

const ToyDetailsMessages = ({ toy, onSubmitMessage, onDeleteMessage, isDisabled }) => {
    const user = useSelector(state => state.userModule.user)
    return (
        <section className="toy-details-messages">
            {user && <ToyDetailsNewMessage isDisabled={isDisabled} onSubmitMessage={onSubmitMessage} />}
            <ToyDetailsMessagesList toy={toy} isDisabled={isDisabled} onDeleteMessage={onDeleteMessage} />
        </section>
    )
}

export default ToyDetailsMessages;