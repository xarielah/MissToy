import { Link } from "react-router";
import logo from "../../assets/imgs/logo.png";
import AppFooterSubscribe from "./AppFooterSubscribe";

const AppFooter = () => {
    return (
        <footer className="app-footer full">
            <AppFooterSubscribe />

            <section className="app-footer-links">
                <img src={logo} alt="logo" className="app-footer-logo" />
                <section className="app-footer-links-section">
                    <ul className="app-footer-links-list">
                        <li>
                            <ul className="app-footer-links-sublist">
                                <li><h3>About Us</h3></li>
                                <li><Link to="#">Our Story</Link></li>
                                <li><Link to="#">Branches</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="app-footer-links-sublist">
                                <li><h3>Our Product</h3></li>
                                <li><Link to="#">Our Manufaturing Process</Link></li>
                                <li><Link to="#">Want to be a part of the family?</Link></li>
                                <li><Link to="#">Retails</Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="app-footer-links-sublist">
                                <li><h3>Categories</h3></li>
                                <li><Link to="#">All Categories</Link></li>
                                <li><Link to="#">Toys</Link></li>
                                <li><Link to="#">Board Games</Link></li>
                                <li><Link to="#">Toddler's Toys</Link></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="app-footer-links-sublist">
                                <li><h3>Our Services</h3></li>
                                <li><Link to="#">How to use our services</Link></li>
                                <li><Link to="#">About our services</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">Terms of Service</Link></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export default AppFooter;