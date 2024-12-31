import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppFooter from "./cmps/app/AppFooter";
import AppHeader from "./cmps/app/AppHeader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToyIndex from "./pages/ToyIndex";
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
          <Route path="/" element={<ToyIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App;