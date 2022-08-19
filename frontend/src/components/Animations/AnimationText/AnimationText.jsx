import { Wrapper } from './AnimationText.style'
import { Letters } from './Letters';

export function AnimationText(props){


    return (
        <Wrapper size={props.text.length}>
            <Letters letters={props.text} />
        </Wrapper>
    )
}