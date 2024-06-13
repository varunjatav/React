import './App.css'
import MarksComponent from './components/MarksComponent'
import NameComponent from './components/NameComponent'

function App() {
  

  return (
    <div>
      <NameComponent name={"Ajay"}/>
      <MarksComponent marks={90} subject={"English"}/>
    </div>
  )
}

export default App
