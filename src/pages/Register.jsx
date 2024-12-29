import { useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { userService } from "../services/user.service"

const Register = () => {
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const [error, setError] = useState(null)

    const loggedInUser = useSelector(state => state.userModule.user)
    if (loggedInUser)
        return <Navigate to="/home" />

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname)
            return setError("Please fill all the required fields")
        userService.signup(credentials)
            .then(user => {
                setError(null)
                setCredentials(userService.getEmptyCredentials())
            })
            .catch(err => {
                setError(err)
            })
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <form className="signup centered-container" onSubmit={handleSubmit}>
            <h1>SignUp</h1>
            {error && <p className="auth-error">{error}</p>}
            <input className="input" onChange={handleChange} name="username" type="text" placeholder="Enter your username" required />
            <input className="input" onChange={handleChange} name="fullname" type="text" placeholder="Enter your fullname" required />
            <input className="input" onChange={handleChange} name="password" type="password" placeholder="Enter your password" required />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default Register;