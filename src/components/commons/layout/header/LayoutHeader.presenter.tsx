import LayoutSideMenu from "../sidemenu/LayoutSideMenu.container";
import {
    LayoutHeaderStyles
} from "./LayoutHeader.styles";
import Logo from '../../../commons/logo/logo'
import LayoutUserStateContainer from "../userstate/LayoutUserState.container";

const LayoutHeaderPresenterr = ({ refHeader, changeHeader }) => {
    return (
        <LayoutHeaderStyles ref={refHeader} changeHeader={changeHeader}>
            <LayoutUserStateContainer changeHeader={changeHeader} />
            <div>
                <Logo changeHeader={changeHeader} />
                <LayoutSideMenu changeHeader={changeHeader} />
            </div>
        </LayoutHeaderStyles>
    );
};

export default LayoutHeaderPresenterr;