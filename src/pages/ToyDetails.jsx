import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ToyDetailsActions from "../cmps/toys/ToyDetailsActions";
import ToyDetailsAdmin from "../cmps/toys/ToyDetailsAdmin";
import ToyDetailsInformation from "../cmps/toys/ToyDetailsInformation";
import ToyDetailsMessages from "../cmps/toys/ToyDetailsMessages";
import { toyService } from "../services/toy.service";

const ToyDetails = () => {
    const toyId = useParams().toyId
    const [toy, setToy] = useState()
    const [loading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState(false)
    const navigate = useNavigate();

    // Fetch toy from the server
    useEffect(() => {
        setLoading(true)
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                navigate('/', { replace: true })
            })
            .finally(() => setLoading(false))
    }, [toyId])

    const handleNewMessage = async (message) => {
        setActionLoading(true)
        toyService.addMessage(toyId, message)
            .then(setToy)
            .finally(() => setActionLoading(false))
    }

    const handleDeleteMessage = async (messageId) => {
        setActionLoading(true)
        toyService.removeMessage(toyId, messageId)
            .then((toy) => setToy(prevToy => ({ ...prevToy, messages: toy.messages.filter(message => message._id !== messageId) })))
            .finally(() => setActionLoading(false))
    }

    if (loading) return <p>Loading...</p>
    return <section className="toy-details">
        <ToyDetailsAdmin toy={toy} />
        <main>
            <ToyDetailsInformation toy={toy} />
            <ToyDetailsActions toy={toy} />
        </main>
        <hr style={{ width: '100%' }} />
        <footer>
            <h2 style={{ marginTop: 0 }}>Messages</h2>
            <ToyDetailsMessages
                toy={toy}
                onSubmitMessage={handleNewMessage}
                onDeleteMessage={handleDeleteMessage}
                isDisabled={actionLoading || loading}
            />
        </footer>
    </section>
}

export default ToyDetails;