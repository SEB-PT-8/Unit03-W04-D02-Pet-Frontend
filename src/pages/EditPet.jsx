import { useState } from "react"
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


    function handleSubmit(event){
        event.preventDefault()
    }

    
  return (
    <div>
        <h1>Edit Pet</h1>
        <form onSubmit={handleSubmit}>

        </form>
    </div>
  )
}

export default EditPet