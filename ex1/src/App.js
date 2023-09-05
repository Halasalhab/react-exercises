import styled from 'styled-components'
import SearchAndAddMembers from './components/SearchAndAddMembers';

const AppContainer = styled.div`
  text-align: left;
  margin: 2rem;
`
function App() {
  return (
    <AppContainer className="App">
      <p><strong>Add members to Front-end development team</strong></p>
      <SearchAndAddMembers />
    </AppContainer>
  );
}

export default App;
