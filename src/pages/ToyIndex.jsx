import { Outlet } from "react-router";
import ToySideFilter from "../cmps/toys/ToySideFilter";

const ToyIndex = () => {
    return (
        <section className="toy-index">
            <h1>Browse Toys</h1>
            <ToySideFilter />
            <Outlet />
        </section>
    )
}

export default ToyIndex;