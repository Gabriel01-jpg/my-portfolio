import { Box, Container, ExperienceContent, ImageBox, Title } from "./About.style"

import girlCoding from '../../images/About/girl-coding.svg'
import { Skills } from "../Skills"

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
                    <Skills />                 
                </Box>

            </ExperienceContent>

        </Container>
    )
}