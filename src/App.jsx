
import "./styles/style.css"
import Accordion from './Components/Accordion'
import Attribution from './Components/Attribution'
const App = () => {
  return (
    <div className='wrapper' >
      <div className="background"></div>
      <Accordion />
      <Attribution/>
    </div>
  )
}
export default App

