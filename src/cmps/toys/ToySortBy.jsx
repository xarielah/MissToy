import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { sortValues } from "../../store/reducers";

const ToySortBy = ({ onSortByChange }) => {
    const [sortBy, setSortBy] = useState('')
    const [asc, setAsc] = useState(true)
    const debounce = useDebounce(onSortByChange, 300)

    useEffect(() => {
        debounce({ field: sortBy, asc: asc })
    }, [sortBy, asc])

    const toggleAsc = () => setAsc(asc => !asc);

    return (
        <label className="toy-sort-by">
            <span>Sort By</span>
            <select onChange={e => setSortBy(e.target.value)}>
                <option value="">None</option>
                <option value={sortValues.name}>Name</option>
                <option value={sortValues.price}>Price</option>
                <option value={sortValues.created}>Created</option>
            </select>
            <button style={{ marginLeft: '10px' }} onClick={toggleAsc}>{asc ? '▲ Ascending' : '▼ Descending'}</button>
        </label>
    )
}

export default ToySortBy;