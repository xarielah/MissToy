import { BiLogOut } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { userService } from "../../services/user.service";

const AppHeaderUser = () => {
    const user = useSelector(state => state.userModule.user)
    return (
        <>
            <BsPerson />
            {user ?
                <div className="app-logged-user">
                    <span>{user.fullname} {user.isAdmin ? '(Site Owner)' : ''}</span>
                    <BiLogOut style={{ cursor: 'pointer' }} role="button" onClick={() => userService.logout()} />
                </div> :
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