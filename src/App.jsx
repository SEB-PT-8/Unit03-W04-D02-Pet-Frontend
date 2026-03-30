import { Routes, Route } from "react-router"
import Homepage from "./pages/Homepage"
function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default App