import React from 'react'
import './searchBar.css'
import SearchInput from '../SearchInput/SearchInput'

export default function SearchBar({setNotes, setError, notes, setSearchResult}) {
    return (
        <div className='search-bar-wraper'>
            <p>My Note Keeper</p>
            <SearchInput setNotes={setNotes} setError={setError} notes={notes} setSearchResult={setSearchResult}/>
        </div>
    )
}
