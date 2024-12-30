const ToyPreview = ({ toy, onAddToCart, onBuy, onAddToWishlist }) => {
    return (
        <div className="toy-preview">
            <header></header>
            <main>
                <h2>{toy.name}</h2>
            </main>
            <footer className="toy-preview-footer">
                {toy.inStock && <>
                    <div>
                        <span onClick={() => onBuy("I want to buy it")}>Buy</span>
                        <span onClick={() => onAddToCart("Adding to cart")}>Add To Cart</span>
                    </div>
                    <span>{toy.price.toFixed(2)} ILS</span>
                </>}
                {!toy.inStock && <>
                    <div>
                        <span onClick={() => onAddToWishlist("Adding to wishlist")}>Add To Wishlist</span>
                    </div>
                    <span style={{ color: 'red' }}>Out of stock</span>
                </>
                }
            </footer>
        </div>
    )
}

export default ToyPreview;