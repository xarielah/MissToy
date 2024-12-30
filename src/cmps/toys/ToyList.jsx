import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toyService } from "../../services/toy.service";
import ToyPreview from "./ToyPreview";

const ToyList = () => {
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true);
    const category = useParams().category;

    useEffect(() => {
        setLoading(true);
        toyService.query()
            .then(setToys)
            // Replace with event bus
            .catch(() => alert("cannot fetch toys"))
            .finally(() => setLoading(false));
    }, [category])
    return (
        <section className="toy-list">
            {loading && <h3>Digging into the toy box...</h3>}
            {!loading && toys.map(toy => <ToyPreview
                onBuy={console.log}
                onAddToCart={console.log}
                onAddToWishlist={console.log}
                key={toy._id}
                toy={toy}
            />)}
        </section>
    )
}

export default ToyList;