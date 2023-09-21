import React from 'react'
import './searchBar.css'
import SearchInput from '../SearchInput/SearchInput'

export default function SearchBar() {
    return (
        <div className='search-bar-wraper'>
            <p>My Note Keeper</p>
            <SearchInput />
        </div>
    )
}
