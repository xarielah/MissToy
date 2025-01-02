import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ToyEditForm from "../cmps/toys/ToyEditForm";
import { toyService } from "../services/toy.service";

const ToyEdit = () => {
    const [toy, setToy] = useState(toyService.getEmptyToy())
    const [loading, setLoading] = useState(true)
    const toyId = useParams().toyId
    const navigate = useNavigate();
    const user = useSelector(state => state.userModule.user)

    const throwOut = () => navigate('/', { replace: true })

    useEffect(() => {
        if (user === null) {
            throwOut()
            return;
        }

        if (user && !user.isAdmin) {
            throwOut()
        }

        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
            .catch(err => {
                console.error(err)
                throwOut()
            })
            .finally(() => setLoading(false))
    }, [toyId])

    const handleSubmit = (toy) => {
        console.log("🚀 ~ handleSubmit ~ toy:", toy)
    }

    if (loading) return <p>Loading...</p>
    return <section className="toy-edit">
        <h1>{toy._id ? 'Edit' : 'Add New'} Toy</h1>
        <ToyEditForm toy={toy} onSubmit={handleSubmit} />
    </section>
}

export default ToyEdit;