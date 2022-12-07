// import './App.css'
import styled from 'styled-components'
import ShowMovies from './components/ShowMovies'
import UserDataForm from './components/UserDataForm'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`

function App() {

  return (
    <AppContainer className="App">
      <UserDataForm />
      <ShowMovies />
    </AppContainer>
  )
}

export default App
