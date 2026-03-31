import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL

async function getPetById(id){
    try{
        const res = await axios.get(`${baseUrl}/pets/${id}`)
        return res.data
    }
    catch(err){

    }
}

async function fetchAllPets(){
    try{
        const res = await axios.get(`${baseUrl}/pets`)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}

export {getPetById, fetchAllPets}