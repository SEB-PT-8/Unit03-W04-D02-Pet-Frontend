import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router"
import { fetchAllPets } from "../services/petsService"

function AllPets() {
    const [pets, setPets] = useState([])

    async function getAllPets(){
        try{
        // 1. get all the pets from our API
        const allPets = await fetchAllPets()
        // 2. set the state to all the pets
        console.log(allPets)
        setPets(allPets)

        }
        catch(err){
            console.log(err)
        }
      
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
            <Link to={`/pets/${onePet._id}`}>See Details</Link>
        </div>
        )}
    </div>
  )
}

export default AllPets