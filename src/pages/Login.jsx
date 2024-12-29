import { useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { userService } from "../services/user.service"

const Login = () => {
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const [error, setError] = useState(null)

    const loggedInUser = useSelector(state => state.userModule.user)
    if (loggedInUser)
        return <Navigate to="/home" />

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        userService.login(credentials)
            .then(() => {
                setError(null)
                setCredentials(userService.getEmptyCredentials())
            })
            .catch(err => {
                setError(err)
            })
    }

    return (
        <form className="login centered-container" onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && <p className="auth-error">{error}</p>}
            <input className="input" onChange={handleChange} name="username" type="text" placeholder="Enter your username" />
            <input className="input" onChange={handleChange} name="password" type="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;