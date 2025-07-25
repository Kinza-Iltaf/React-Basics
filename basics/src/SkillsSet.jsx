import Skills from "./Skills"
function SkillsSet() {
    return (
        <>
       <Skills Skill="Tools" Items = {[<li>git </li>,<li> vs code</li>, <li>Jira</li>]} />
       <Skills Skill="Languages" Items={["c++","java","python"]}/>
       <Skills Skill="Hobbies" Items = {["passionate","adaptable","hardworker"]}/>
        </>
    )
}

export default SkillsSet;