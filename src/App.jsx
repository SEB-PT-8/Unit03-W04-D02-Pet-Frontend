import { Routes, Route } from "react-router"
import Homepage from "./pages/Homepage"
import AllPets from "./pages/AllPets"
import CreatePet from "./pages/CreatePet"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>


      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/pets' element={<AllPets/>}/>
        <Route path='/pets/create' element={<CreatePet/>}/>
      </Routes>
    </div>
  )
}

// Exercise 1:
// 1. Create a new component in the pages folder called CreatePet.jsx
// 2. add an <h1>Create a new Pet </h1>
// 3. have it so when we go to the /pets/create route we see this component

export default App