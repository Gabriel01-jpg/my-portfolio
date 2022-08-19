import { AnimationText } from "../Animations/AnimationText/AnimationText"
import { FileDownload, HomeContent, HomeSection, HomeTitle, Title } from "./Home.style"

import guyCoding from '../../images/Homer/guycoding.svg'
import { Image } from "../Animations/ImageAnimation/AnimationImage.style"

export const Home = () => {
    return (
        <HomeSection>
            <HomeContent>
                <HomeTitle>
                    <Title maxWidth="20rem">Hello, I’am Gabriel Lima</Title>
                    <Title color="#FF4C60"><AnimationText text={"Fullstack developer"} /></Title>
                    <FileDownload href="/cv">Download Resumo</FileDownload>
                </HomeTitle>
                <Image src={guyCoding}/>
                
            </HomeContent>
        </HomeSection>
        
    )
}