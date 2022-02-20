import { useEffect, useRef, useState } from "react";
import LayoutHeaderPresenterr from "./LayoutHeader.presenter";

const LayoutHeaderContainer = () => {
    const refHeader = useRef()
    const [changeHeader, setChangeHeader] = useState(false)
    const onSroll = () => {
        window.scrollY > 50 ? setChangeHeader(true) : setChangeHeader(false)
    }
    useEffect(() => {
        window && window.addEventListener('scroll', onSroll)
    }, [])
    return <LayoutHeaderPresenterr
        refHeader={refHeader}
        changeHeader={changeHeader}
    />
};

export default LayoutHeaderContainer;