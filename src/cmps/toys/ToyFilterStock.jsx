import { useEffect, useState } from "react"
import useDebounce from "../../hooks/useDebounce"

const ToyFilterStock = ({ onFilterChange }) => {
    const [value, setValue] = useState('')
    const debounce = useDebounce(onFilterChange, 300)

    const stockOptions = {
        all: '',
        inStock: 'In Stock',
        outOfStock: 'Out of Stock'
    }

    useEffect(() => {
        debounce({ name: 'inStock', value: value === '' ? null : value === stockOptions.inStock })
    }, [value])

    return (
        <label className="toy-filter-stock">
            <span>In Stock</span>
            <select onChange={e => setValue(e.target.value)}>
                <option value={stockOptions.all}>All</option>
                <option value={stockOptions.inStock}>In Stock</option>
                <option value={stockOptions.outOfStock}>Out of Stock</option>
            </select>
        </label>
    )
}

export default ToyFilterStock;