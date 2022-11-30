import { HeaderIcon, HeaderWrapper } from "./header.style";
import strokeHeaderIcon from '../../images/Header/HeaderStrokerIcon.svg'

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderIcon src={strokeHeaderIcon} />
        </HeaderWrapper >
    )
}