import { NavLink } from "react-router";
import { labels } from "../../services/toy.service";

const ToySideFilter = () => {
    return (
        <aside className="toy-side-filter">
            <h3>Categories</h3>
            <ul>
                {labels.map(label => <li key={label.slug}><NavLink to={`/${label.slug}`}>{label.label}</NavLink></li>)}
            </ul>
        </aside>
    )
}

export default ToySideFilter;