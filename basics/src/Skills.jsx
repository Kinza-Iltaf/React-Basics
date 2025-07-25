
import "./Skills.css"
function Skills({Skill,Items}) {

    return (
        <div  className="Skills">
        <h1>{Skill}</h1>
        <p>{Items}</p>
     
       </div>
    )
}

export default Skills;