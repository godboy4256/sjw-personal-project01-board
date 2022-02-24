import { withAuth } from "../../withAuth";
import LayoutUserStatePresenter from "./LayoutUserState.presenter"

const LayoutUserStateContainer = ({ changeHeader }) => {
    return <LayoutUserStatePresenter changeHeader={changeHeader} />
};

export default LayoutUserStateContainer;