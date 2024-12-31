import ToyFilterLabel from "./ToyFilterLabel";
import ToyFilterStock from "./ToyFilterStock";
import ToyFilterText from "./ToyFilterText";

const ToyFilter = ({ onFilterChange }) => {
    return (
        <section className="toy-filter">
            <ToyFilterText onFilterChange={onFilterChange} />
            <ToyFilterLabel onFilterChange={onFilterChange} />
            <ToyFilterStock onFilterChange={onFilterChange} />
        </section>
    )
}

export default ToyFilter;   