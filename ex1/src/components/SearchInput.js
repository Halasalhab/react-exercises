import React from 'react'
import styled from 'styled-components'
import colors from '../theme'

const SearchContainer = styled.div`
  position: relative;
  width: 360px; 
  margin-block: 1.5rem; 
`
const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 20px;
  border: none;
  border-bottom: 1px solid ${colors.primary};
`
const SearchIcon = styled.img`
  position: absolute;
  width: 20px;
  hight: 15px;
  top: 50%;
  left: -2px;
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