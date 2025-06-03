import Navigation from "./Navigation/Navigation"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import Electronics from "./Electronics/Electronics"

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
           <Route path="/electronics" element={<Electronics/>} />



          {/* error pages */}
          <Route path="*" element={<p>404 Error</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
