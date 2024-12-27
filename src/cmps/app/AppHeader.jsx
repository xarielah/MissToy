import AppHeaderBottom from "./AppHeaderBottom";
import AppHeaderContent from "./AppHeaderContent";
import AppHeaderTop from "./AppHeaderTop";

const AppHeader = () => {
    return (
        <header className="app-header full">
            <AppHeaderTop />
            <AppHeaderContent />
            <AppHeaderBottom />
        </header>
    )
}

export default AppHeader;