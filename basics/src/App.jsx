
import './App.css'
import { Intro, Profession } from './Intro'
import SkillsSet from './SkillsSet';


function App() {

  const name = "Kinza"; 
  return (
    <div>
<Intro />
<Profession /> 
<p>Hello {name.toLowerCase()}</p>
<h1 id='Skills-heading'>Skills</h1>
<SkillsSet />
   </div>

  )
    
}

export default App
