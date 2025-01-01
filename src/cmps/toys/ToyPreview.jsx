import { Link } from "react-router";
import Tag from "../ui/Tag";

const ToyPreview = ({ toy, onAddToCart, onBuy, onAddToWishlist }) => {
    return (
        <div className="toy-preview">
            <header className="toy-preview-header">
                {toy.createdAt && <small>{new Date(toy.createdAt).toLocaleDateString("he-IL")}</small>}
                {toy.labels.length > 0 && toy.labels.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </header>
            <main>
                <h2><Link to={`/toy/${toy._id}`}>{toy.name}</Link></h2>
            </main>
            <footer className="toy-preview-footer">
                {toy.inStock && <>
                    <div>
                        <button onClick={() => onBuy("I want to buy it")}>Buy</button>
                        <button onClick={() => onAddToCart("Adding to cart")}>Add To Cart</button>
                    </div>
                    <span>{toy.price.toFixed(2)} ILS</span>
                </>}
                {!toy.inStock && <>
                    <div>
                        <button onClick={() => onAddToWishlist("Adding to wishlist")}>Add To Wishlist</button>
                    </div>
                    <span style={{ color: 'red' }}>Out of stock</span>
                </>
                }
            </footer>
        </div>
    )
}

export default ToyPreview;