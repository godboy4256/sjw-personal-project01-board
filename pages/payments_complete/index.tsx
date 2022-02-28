import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PaymentsCompletesStyles } from './styles';

const PaymentsComplete = () => {
    const router = useRouter()
    const address = router?.query?.address
    const goHome = () => {
        router.push('/')
    }

    return (
        <PaymentsCompletesStyles>
            <div>
                <h2>결제가 완료되었습니다.</h2>
                <p>상품이 <span>{address}</span> 위치로 배송됩니다. 주소를 확인하세요.</p>
                <button onClick={goHome}>홈으로 이동</button>
            </div>
        </PaymentsCompletesStyles>
    );
};

export default PaymentsComplete;