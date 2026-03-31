import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"; // used for redirecting the user

function CreatePet() {
  const [formData, setFormData] = useState({
    name:'',
    age:0,
    breed:''
  })

  const navigate = useNavigate()
  
   function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


  async function handleSubmit(event){
    event.preventDefault()
    console.log("FORM IS SUBMITTED")
    // send the data that the user inputted as a POST request to the server
    const createdPet = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/pets`, formData)

    navigate('/pets/' + createdPet.data._id) // after the pet is created we rediect to /pets
  }



  return (
    <div>
        <h1>Create a new Pet</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} value={formData.name} name='name' type="text" />

          <label htmlFor="age">Age:</label>
          <input onChange={handleChange} min={0} value={formData.age} name='age' type="number" />

          <label htmlFor="breed">Breed:</label>
          <input onChange={handleChange} value={formData.breed} name='breed' type="text" />

          <button>Create Pet</button>
        </form>
    </div>
  )
}

export default CreatePet