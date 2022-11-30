import { BallsBackground, SkillBackground, SkillTitle, SkillWrapper } from "./styles"
import ballSVG from '../../images/Homer/Balls.svg'

export const Skill = ({ title, children }) => {
    return (
        <SkillWrapper>
            <SkillTitle>{title}</SkillTitle>
            <SkillBackground>
                {children}
            </SkillBackground>
            <BallsBackground src={ballSVG} alt="Circle with different colors"/>
        </SkillWrapper>

    )
}