
import "./Skills.css"
function Skills({Skill,Items}) {

    return (
        <div  className="Skills">
        <h4>{Skill}</h4>
        <p>{Items}</p>
     
       </div>
    )
}

export default Skills;