import React from 'react'
import './searchInput.css'
import axios from 'axios';

export default function SearchInput({ setNotes, setError, notes, setSearchResult }) {

  const searchNotes = async (searchValue) => {
    const params ={
      title: searchValue,
      content: searchValue
    }

    try {
      await axios.get('http://localhost:3001/notes/search', {params}).then((response) => {
        setSearchResult(response.data);
        })
    } catch (error) {
    setError(error);
    }
  }

  const handelChange = (e) => {
    let searchValue = e.target.value;
    if (searchValue !== '') {
      searchNotes(searchValue);
    } else {
      setSearchResult(null); 
      setNotes(notes); 
    }
  }

  return (
    <div className='container'>
      <i className="fa-solid fa-magnifying-glass fa-lg"></i>
      <input placeholder='Search' className='search-input' onChange={handelChange} />
    </div>
  )
}
