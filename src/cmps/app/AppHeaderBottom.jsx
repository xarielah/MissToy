import { Link } from "react-router";

const AppHeaderBottom = () => {
    return (
        <section className="app-header-bottom full">
            <menu>
                <li>
                    <Link to="/">Browse Toys</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </menu>
        </section>
    )
}

export default AppHeaderBottom;