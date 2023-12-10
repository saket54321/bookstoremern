import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from "axios";

function Deletebook() {
  const {id}=useParams();
  const Navigate=useNavigate();
  const handledelete=()=>{
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(()=>Navigate('/'))
    .catch((error)=>{
      console.log("error in deleting");
    })

  }
  return (
    <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handledelete}
        >
          Yes, Delete it
        </button>
      </div>
  )
}

export default Deletebook