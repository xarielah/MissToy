import { useDispatch } from "react-redux";
import { SET_FILTER_IN_STOCK, SET_FILTER_LABELS, SET_FILTER_NAME, SET_SORT_BY } from "../../store/reducers";
import ToyFilter from "./ToyFilter";
import ToySortBy from "./ToySortBy";

const ToyFilterIndex = () => {
    const dispatch = useDispatch();

    const onFilterChange = ({ name, value }) => {
        if (name === 'name')
            dispatch({ type: SET_FILTER_NAME, payload: value })
        else if (name === 'labels')
            dispatch({ type: SET_FILTER_LABELS, payload: value })
        else if (name === 'inStock')
            dispatch({ type: SET_FILTER_IN_STOCK, payload: value },)
    }

    const onSortByChange = ({ field, asc }) => {
        dispatch({ type: SET_SORT_BY, payload: { field: field, asc: asc } })
    }

    return (
        <aside className="toy-filter-index">
            <ToyFilter onFilterChange={onFilterChange} />
            <ToySortBy onSortByChange={onSortByChange} />
        </aside>
    )
}

export default ToyFilterIndex;