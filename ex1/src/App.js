import styled from 'styled-components'
import SearchAndAddMembers from './components/SearchAndAddMembers';
import { useState } from 'react';

const AppContainer = styled.div`
  text-align: left;
  margin: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Carolien Bloeme', member: false },
    { id: 2, name: 'Sun Jun', member: true },
    { id: 3, name: 'Song Bao', member: false },
    { id: 4, name: 'Bonginkosi Mdladlana', member: false },
    { id: 5, name: 'Arina Belomestnykh', member: false },
    { id: 6, name: 'Jacqueline Likoki', member: false },
  ])
  
  const handelCheckMarkBtn = (memberId) => {
    const updatedMembers = members.map((member) => {
      if (member.id === memberId) {
        return { ...member, member: !member.member };
      }
      return member;
    });

    setMembers(updatedMembers);
  }

  return (
    <AppContainer className="App">
      <p><strong>Add members to Front-end development team</strong></p>
      <SearchAndAddMembers members={members} handelCheckMarkBtn={handelCheckMarkBtn} />
    </AppContainer>
  );
}

export default App;
