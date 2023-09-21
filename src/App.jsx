import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{ name: "josué", email: "j1234@penguin.org" }}/>
    </>
  )
}

export default App
