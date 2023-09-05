import React from 'react'
import styled from 'styled-components'
import colors from '../theme'

const SearchContainer = styled.div`
  position: relative;
  width: 300px; 
`
const Input = styled.input`
  width: 100%;
  padding: 10px 30px 10px 10px;
  border-bottom: 1px solid ${colors.primary};
  border-radius: 4px;
`
const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`
function SearchInput() {
    return (
        <SearchContainer>
            <SearchIcon src='/icons/search-icon.svg' />
            <Input type='search' placeholder='Find members'/>
        </SearchContainer>
    )
}

export default SearchInput