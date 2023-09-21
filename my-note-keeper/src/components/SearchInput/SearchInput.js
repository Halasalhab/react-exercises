import React from 'react'
import './searchInput.css'

export default function SearchInput() {
  return (
    <div className='container'>
    <i class="fa-solid fa-magnifying-glass fa-lg"></i>
    <input placeholder='Search' className='search-input'/>
    </div>
  )
}
