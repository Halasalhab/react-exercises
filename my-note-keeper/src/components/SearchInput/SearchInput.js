import React from 'react'
import './searchInput.css'

export default function SearchInput() {
  
  // const searchNotes = async() =>{
  //   try{
  //    await axios.get('http://localhost:3001/notes/search', { params: 

  //    }).then(()=>{

  //    })
  //   } catch(e){

  //   }
  // }
  
  return (
    <div className='container'>
    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
    <input placeholder='Search' className='search-input'/>
    </div>
  )
}
