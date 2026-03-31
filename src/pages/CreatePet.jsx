import { useState } from "react"

function CreatePet() {
  const [formData, setFormData] = useState({
    name:'',
    age:0,
    breed:''
  })


  function handleSubmit(event){
    event.preventDefault()
  }
  return (
    <div>
        <h1>Create a new Pet</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input name='name' type="text" />

          <label htmlFor="age">Age:</label>
          <input name='age' type="number" />

          <label htmlFor="breed">Breed:</label>
          <input name='breed' type="text" />

          <button>Create Pet</button>
        </form>
    </div>
  )
}

export default CreatePet