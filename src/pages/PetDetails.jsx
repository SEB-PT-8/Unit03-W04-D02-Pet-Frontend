import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'




function PetDetails() {
    const [pet, setPet] = useState(null)
    const {id} = useParams()
    console.log(id)

    const navigate = useNavigate()

    async function getOnePet(){
        const onePet = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/pets/${id}`)

        setPet(onePet.data)
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
            </>
            ) : <h2>Loading...</h2>}
    </div>
  )
}

export default PetDetails