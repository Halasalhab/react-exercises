import React from 'react'
import SearchInput from './SearchInput'
import Card from './MemberCard'

function SearchAndAddMembers({members}) {
  return (
    <div>
      <SearchInput />
      {members?.length? members.map((member) =>{
        return <Card key={member.id} member={member}/>
      }): <p>No members found</p>}
    </div>
  )
}

export default SearchAndAddMembers