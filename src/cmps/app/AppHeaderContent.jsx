import logo from "../../assets/imgs/logo.png";
import AppHeaderCart from "./AppHeaderCart";

const AppHeaderContent = () => {
    console.log(logo)
    return (
        <section className="app-header-content full">
            <div className="app-header-content-wrapper">
                <img src={logo} alt="logo" className="app-header-logo" />
                <AppHeaderCart />
            </div>
        </section>
    )
}

export default AppHeaderContent;