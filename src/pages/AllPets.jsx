import { useState, useEffect } from "react"
import axios from 'axios'

function AllPets() {
    const [pets, setPets] = useState([])

    async function getAllPets(){
        // 1. get all the pets from our API
        const allPets = await axios.get('http://localhost:3000/pets')
        // 2. set the state to all the pets
        console.log(allPets.data)
        setPets(allPets.data)
    }
    
    // 2 arguments
    // arrow function
    // dependancy array
    useEffect(()=>{
        getAllPets()
    },[])

  return (
    <div>
        <h1>All Pets</h1>
        {pets.map((onePet)=>
        <div key={onePet._id}>
            <h2>Name: {onePet.name}</h2>
        </div>
        )}
    </div>
  )
}

export default AllPets