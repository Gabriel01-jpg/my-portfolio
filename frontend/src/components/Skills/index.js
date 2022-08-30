import { Skill } from "./Skill"
import { SkillsWrapper } from "./style"


const bestSkills = [
    'React',
    'Node',
    'Typescript',
    'Javascript'
]
export const Skills= ({}) => {
    return (
        <SkillsWrapper>
            {bestSkills.map((skill, index) => {
                return (
                    <Skill title={skill} key={index}></Skill>
                )
            })}
        </SkillsWrapper> 
    )
    
}