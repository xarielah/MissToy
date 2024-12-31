import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ToyFilterIndex from "../cmps/toys/ToyFilterIndex";
import ToyList from "../cmps/toys/ToyList";
import { toyService } from "../services/toy.service";

const ToyIndex = () => {
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true);
    const filterBy = useSelector(state => state.toyModule.filterBy)
    const sortBy = useSelector(state => state.toyModule.sortBy)

    useEffect(() => {
        setLoading(true);
        toyService.query()
            .then(setToys)
            // Replace with event bus
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [filterBy, sortBy])

    return (
        <section className="toy-index">
            <h1>Browse Toys</h1>
            <ToyFilterIndex />
            {<ToyList toys={toys} isLoading={loading} />}
        </section>
    )
}

export default ToyIndex;