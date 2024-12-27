import AppHeaderUser from "./AppHeaderUser";

const AppHeaderTop = () => {
    return (
        <section className="app-header-top full">
            <div className="app-header-top-wrapper">
                <span>Welcome to Ms.Toy Toy Store!</span>
                <li className="cart-user-wrapper">
                    <span>asdasd</span>
                    <span>123123</span>
                    <AppHeaderUser />
                </li>
            </div>
        </section>
    )
}

export default AppHeaderTop;