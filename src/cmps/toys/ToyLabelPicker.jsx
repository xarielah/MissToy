const ToyLabelPicker = () => {
    return (
        <section className="toy-label-picker">
            <span>Labels</span>
            <select>
                <option value="">All</option>
                <option value="">New Arrivals</option>
                <option value="">Best Sellers</option>
                <option value="">Most Popular</option>
            </select>
        </section>
    )
}

export default ToyLabelPicker;