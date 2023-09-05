import React from 'react'
import SearchInput from './SearchInput'
import Card from './MemberCard'
import CancelBtn from './Buttons/CancelBtn'
import { styled } from 'styled-components'
import SaveBtn from './Buttons/SaveBtn'

const Contianer = styled.div`
width: 360px;
`
const BtnContainer = styled.div`
margin-block: 1.5rem; 
width: 100%; 
display: flex;
align-items: center;
justify-content: space-evenly;
`
function SearchAndAddMembers({members, handelCheckMarkBtn}) {
  return (
    <Contianer>
      <SearchInput />
      {members?.length? members.map((member) =>{
        return <Card key={member.id} member={member} handelCheckMarkBtn={handelCheckMarkBtn}/>
      }): <p>No members found</p>}
      <BtnContainer>
      <CancelBtn/>
      <SaveBtn/>
      </BtnContainer>
    </Contianer>
  )
}

export default SearchAndAddMembers