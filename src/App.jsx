import AboutPage from "./components/aboutPage/about.page"
import HomePage from "./Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
