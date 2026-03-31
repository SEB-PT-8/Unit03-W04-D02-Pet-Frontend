import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { getPetById } from "../services/petsService";

// 1. make an axios call to get the full pet details
// 2. pre fill the form with the pet details
// 3. once the user changes and clicks the "edit pet" button we send a PUT request to the server


// Exercise 1:
// 1. Create a state in the EditPet component for the formData
// 2. create the form in the return
// 3. create the handleSubmit function that will prevent the default and add it as a onSubmit for the form
function EditPet() {
    const [formData, setFormData] = useState({
        name:'',
        age:0,
        breed:''
    })

    const { id } = useParams()
    const navigate = useNavigate()

    function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event){
        event.preventDefault()

        try{
        // 1. send a PUT request to /pets/:id
        const updatedPet = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/pets/${id}`, formData)
        // 2. redirect user to /pets
        navigate('/pets/' + id )
        }
        catch(err){
            console.log(err)
        }
        
    }

    async function getPetDetails(){
        const petDetails = await getPetById(id)
        setFormData(petDetails)
    }

    useEffect(()=>{
        getPetDetails()
    },[])


    // 1. when the component first loads, fetch the details of pet by id
    // 2. set the state to the fetched pet



    
  return (
    <div>
        <h1>Edit Pet</h1>
        <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input value={formData.name} onChange={handleChange} name="name" type="text" />

        <label htmlFor="age">Age:</label>
        <input value={formData.age} onChange={handleChange} name="age" type="number" />

        <label htmlFor="">Breed:</label>
        <input value={formData.breed} onChange={handleChange} name="breed" type="text" />

        <button>Edit Pet</button>
        </form>
    </div>
  )
}

export default EditPet