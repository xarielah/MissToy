import { Link } from "react-router";
import logo from "../../assets/imgs/logo.png";
import AppHeaderCart from "./AppHeaderCart";

const AppHeaderContent = () => {
    console.log(logo)
    return (
        <section className="app-header-content full">
            <div className="app-header-content-wrapper">
                <Link to="/">
                    <img src={logo} alt="logo" className="app-header-logo" />
                </Link>
                <AppHeaderCart />
            </div>
        </section>
    )
}

export default AppHeaderContent;