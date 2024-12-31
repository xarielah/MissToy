import ToyPreview from "./ToyPreview";

const ToyList = ({ toys, isLoading }) => {
    return (
        <section className="toy-list">
            {isLoading && <h3>Digging into the toy box...</h3>}
            {!isLoading && toys.length === 0 && <h3>No results found...</h3>}
            {!isLoading && toys.map(toy => <ToyPreview
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