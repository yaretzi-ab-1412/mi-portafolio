import AboutPage from "./components/aboutPage/about.page"
import HomePage from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about" Component={AboutPage}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
