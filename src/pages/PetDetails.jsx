import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'



function PetDetails() {
    const [pet, setPet] = useState(null)
    const {id} = useParams()
    console.log(id)

    async function getOnePet(){
        const onePet = axios.get(`http://localhost:3000/pets/${id}`)

        setPet(onePet.data)
    }

    useEffect(()=>{
        getOnePet()
    },[])


  return (
    <div>
        <h1>Pet Details</h1>
    </div>
  )
}

export default PetDetails