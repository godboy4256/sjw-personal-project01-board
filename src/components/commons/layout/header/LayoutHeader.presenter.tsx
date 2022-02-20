import LayoutSideMenu from "../sidemenu/LayoutSideMenu.container";
import {
    LayoutHeaderStyles
} from "./LayoutHeader.styles";
import Logo from '../../../commons/logo/logo'



const LayoutHeaderPresenterr = ({ refHeader, changeHeader }) => {
    return (
        <LayoutHeaderStyles ref={refHeader} changeHeader={changeHeader}>
            <Logo changeHeader={changeHeader} />
            <LayoutSideMenu changeHeader={changeHeader} />
        </LayoutHeaderStyles>
    );
};

export default LayoutHeaderPresenterr;