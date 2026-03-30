import { Routes, Route } from "react-router"
import Homepage from "./pages/Homepage"
import AllPets from "./pages/AllPets"
function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/pets' element={<AllPets/>}/>
      </Routes>
    </div>
  )
}

export default App