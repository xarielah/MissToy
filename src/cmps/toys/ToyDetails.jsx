import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toyService } from "../../services/toy.service";

const ToyDetails = () => {
    const toyId = useParams().toyId
    const [toy, setToy] = useState()
    const [loading, setLoading] = useState(true)
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

    if (loading) return <p>Loading...</p>
    return <section className="toy-details">
        <h1>{toy.name}</h1>
        {JSON.stringify(toy)}
    </section>
}

export default ToyDetails;