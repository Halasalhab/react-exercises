import styled from 'styled-components'
import SearchAndAddMembers from './components/SearchAndAddMembers';

const AppContainer = styled.div`
  text-align: left;
  margin: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const members = [
  {id: 1, name: 'Carolien Bloeme', member: false},
  {id: 2, name: 'Sun Jun', member: true},
  {id: 3, name: 'Song Bao', member: false},
  {id: 4, name: 'Bonginkosi Mdladlana', member: false},
  {id: 5, name: 'Arina Belomestnykh', member: false},
  {id: 6, name: 'Jacqueline Likoki', member: false},
]

function App() {
  return (
    <AppContainer className="App">
      <p><strong>Add members to Front-end development team</strong></p>
      <SearchAndAddMembers members={members}/>
    </AppContainer>
  );
}

export default App;
