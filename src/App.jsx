import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppFooter from "./cmps/app/AppFooter";
import AppHeader from "./cmps/app/AppHeader";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { userService } from "./services/user.service";
import { SET_USER } from "./store/reducers";
import { store } from "./store/store";

// Inspiration
// https://malkystoystore.com/

const App = () => {
  useEffect(() => {
    const loggedInUser = userService.getLoggedinUser();
    if (loggedInUser)
      store.dispatch({ type: SET_USER, payload: loggedInUser })
  }, [])

  return (
    <BrowserRouter>
      <AppHeader />
      <main className="app-main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App;