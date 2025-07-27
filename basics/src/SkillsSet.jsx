import Skills from "./Skills"
function SkillsSet() {
    return (
        <>
       <Skills Skill="Tools" Items = {[<li>git </li>,<li> vs code</li>, <li>Jira</li>]} />
       <Skills Skill="Languages" Items={[<li>c++</li>,<li>java</li>,<li>python</li>]}/>
       <Skills Skill="Hobbies" Items = {[<li>passionate</li>,<li>adaptable</li>,<li>hardworker</li>]}/>
        </>
    )
}

export default SkillsSet;