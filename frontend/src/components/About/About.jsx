import { Box, Container, ExperienceContent, ImageBox, Logo, Skills, Title } from "./About.style"
import girlCoding from '../../images/About/girl-coding.svg'
import { Skill } from "../Skill"
import reactLogo from '../../images/Logos/reactIcon.svg'

export const About = () => {
    return (
        <Container>
            <ExperienceContent>
                <ImageBox>
                    <img src={girlCoding} alt="Girl writing HTML and CSS code" />
                </ImageBox>
                <Box>
                    <Title>
                        <h2>My Best Skills</h2>
                        <p>I have one year of experience with React and NodeJS with Typescript, building effective web applications and always trying to improve myself.</p>
                    </Title>
                    <Skills>
                        <Skill title="Typescript">
                            <Logo src="" alt="Typescript logo"/>
                        </Skill>
                        <Skill title="React">
                            <Logo src={reactLogo} alt="React logo"/>
                        </Skill>
                        <Skill title="Node">
                            <Logo src="" alt="Node logo"/>
                        </Skill>
                    </Skills>
                    
                </Box>

            </ExperienceContent>

        </Container>
    )
}