import { CiLocationArrow1 } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import AppHeaderUser from "./AppHeaderUser";

const AppHeaderTop = () => {
    return (
        <section className="app-header-top full">
            <div className="app-header-top-wrapper">
                <span>Welcome to Ms.Toy Toy Store!</span>
                <ul className="user-info-wrapper">
                    <li>
                        <CiLocationArrow1 />
                        <span>Tel Aviv, Israel</span>
                    </li>
                    <li>
                        <LuPhone />
                        <span>+972 54-123-4567</span>
                    </li>
                    <li>
                        <AppHeaderUser />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AppHeaderTop;