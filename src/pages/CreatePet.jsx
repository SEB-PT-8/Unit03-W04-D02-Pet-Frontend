import { useState } from "react"
import axios from 'axios'

function CreatePet() {
  const [formData, setFormData] = useState({
    name:'',
    age:0,
    breed:''
  })

   function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


  async function handleSubmit(event){
    event.preventDefault()
    console.log("FORM IS SUBMITTED")
    // send the data that the user inputted as a POST request to the server
    const createdPet = await axios.post(`http://localhost:3000/pets`, formData)

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