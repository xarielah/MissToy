import { BrowserRouter, Route, Routes } from "react-router";
import AppFooter from "./cmps/app/AppFooter";
import AppHeader from "./cmps/app/AppHeader";
import Home from "./pages/Home";

// Inspiration
// https://malkystoystore.com/

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <main className="app-main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App;