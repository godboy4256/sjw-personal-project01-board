import { useRouter } from "next/router";

const MyMenu = () => {
    const router = useRouter()
    const goMySell = () => router.push('/mySell')
    const goBasket = () => router.push('/basket')
    const goToDay = () => router.push('/today')
    return (
        <ul>
            <li onClick={goToDay}>오늘 본 상품</li>
            <li onClick={goBasket}>장바구니</li>
            <li onClick={goMySell}>나의 판매 상품</li>
        </ul>
    );
};

export default MyMenu;