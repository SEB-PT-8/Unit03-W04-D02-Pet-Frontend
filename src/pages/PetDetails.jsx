import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import axios from 'axios'
import { getPetById } from '../services/petsService'




function PetDetails() {
    const [pet, setPet] = useState(null)
    const {id} = useParams()
    console.log(id)

    const navigate = useNavigate()

    async function getOnePet(){
        const onePet = await getPetById(id)

        setPet(onePet)
    }

    useEffect(()=>{
        getOnePet()
    },[])


    async function deletePet(){
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/pets/${id}`)
        navigate('/pets')

    }

  return (
    <div>
        <h1>Pet Details</h1>

        {pet ? (
            <>
                <h2>Name: {pet.name}</h2>
                <p>Breed: {pet.breed}</p>
                <p>Age: {pet.age}</p>
                <button onClick={deletePet}>Delete Pet</button>
                <Link to={`/pets/edit/${pet._id}`}>Edit Pet</Link>

            </>
            ) : <h2>Loading...</h2>}
    </div>
  )
}

export default PetDetails