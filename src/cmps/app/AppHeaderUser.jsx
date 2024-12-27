import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const AppHeaderUser = () => {
    const user = useSelector(state => state.userModule.user)
    return (
        <>
            <BsPerson />
            {user ?
                <div>Logged In</div> :
                <div className="app-header-user">
                    <span>
                        <Link to="/signup">Sign Up</Link>
                        <span style={{ margin: "0 10px" }}>or</span>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            }
        </>
    )
}

export default AppHeaderUser;