import Navigation from "./Navigation/Navigation"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./Home/Home"

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<p>404 Error</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
