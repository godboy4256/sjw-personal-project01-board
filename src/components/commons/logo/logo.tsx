import { LogoContainer, LogoTitle, LogoIcon } from "./logo.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHippo } from "@fortawesome/free-solid-svg-icons"

const Logo = ({ changeHeader }) => {
    return (
        <LogoContainer changeHeader={changeHeader}>
            <LogoIcon>
                <FontAwesomeIcon icon={faHippo} />
            </LogoIcon>
            <LogoTitle>Zoo</LogoTitle>
        </LogoContainer>
    );
};

export default Logo;