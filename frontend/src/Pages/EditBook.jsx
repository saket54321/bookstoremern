import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from "axios"

function EditBook() {
  const {id} =useParams();
  const[title,setTitle]=useState("");
  const[author,setAuthor]=useState("");
  const[publishyear,setPublishyear]=useState("");
  const navigate=useNavigate();
  
  const handlesavebook=()=>{
    const data={
      title,
      author,
      publishyear
    }
    axios
    .put(`http://localhost:5000/books/${id}`,data)
    .then(()=> navigate('/'))
    .catch((error)=>console.log("error in saving book"));
  };


  return (
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishyear}
            onChange={(e) => setPublishyear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handlesavebook}>save</button>
    </div>    
  )
}

export default EditBook;