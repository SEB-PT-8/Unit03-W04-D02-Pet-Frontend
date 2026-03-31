import React from 'react'

function CreatePet() {


  function handleSubmit(event){
    event.preventDefault()
  }
  return (
    <div>
        <h1>Create a new Pet</h1>

        <form onSubmit={handleSubmit}>

          <button>Create Pet</button>
        </form>
    </div>
  )
}

export default CreatePet