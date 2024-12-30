import { useRef } from "react";
import { NavLink } from "react-router";
import { labels } from "../../services/toy.service";

const ToySideFilter = () => {
    const categoryRef = useRef();

    function getHrefLabel(label) {
        return label.replace(" ", "-").toLowerCase();
    }

    return (
        <aside className="toy-side-filter" ref={categoryRef}>
            <h3>Categories</h3>
            <ul>
                {labels.map(label => <li key={label}><NavLink to={`/${getHrefLabel(label)}`}>{label}</NavLink></li>)}
            </ul>
        </aside>
    )
}

export default ToySideFilter;