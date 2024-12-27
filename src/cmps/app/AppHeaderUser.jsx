import { useSelector } from "react-redux";

const AppHeaderUser = () => {
    const user = useSelector(state => state.userModule.user)
    return (
        <>
            {user ?
                <div>Logged In</div> :
                <div className="app-header-user">
                    <span>Not Logged In</span>
                </div>
            }
        </>
    )
}

export default AppHeaderUser;