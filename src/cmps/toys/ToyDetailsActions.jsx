const ToyDetailsActions = ({ toy }) => {
    return (
        <section className="toy-details-actions">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum eos corrupti doloremque odio neque aut voluptatum tenetur optio maxime provident amet cum esse porro doloribus cumque numquam, non itaque?</p>
            <p>{toy.inStock ? toy.price.toFixed(2) + " ILS" : <span style={{ color: 'red' }}>Out of stock</span>}</p>
            <div className="toy-details-actions-wrapper">
                {toy.inStock ?
                    <>
                        <button className="btn">Buy</button>
                        <button className="btn">Add to Cart</button>
                    </>
                    :
                    <button className="btn">Add to Wishlist</button>
                }
            </div>
        </section>
    )
}

export default ToyDetailsActions;