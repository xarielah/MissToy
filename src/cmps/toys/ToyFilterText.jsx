import { useEffect, useState } from "react"
import useDebounce from "../../hooks/useDebounce"

const ToyFilterText = ({ onFilterChange }) => {
    const [name, setName] = useState('')
    const debounce = useDebounce(onFilterChange, 300)

    useEffect(() => {
        debounce({ name: 'name', value: name })
    }, [name])

    return (
        <label className="toy-filter-text">
            <span>Filter</span>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
    )
}

export default ToyFilterText;