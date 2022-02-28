import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import DaumPostcode from 'react-daum-postcode';
import {
    PaymentsStyles,
    ModalBlack,
    PayBtn,
    Paycontrol
} from "./styles";

const Payment = ({
    sellName,
    sellPrice,
    buyName,
    setOnPay
}) => {
    const router = useRouter()
    const buyerTel = useRef()
    const buyeremail = useRef()
    const [bytel, setByTel] = useState('')
    const [byemail, setByEmail] = useState('')
    const [zip, setZip] = useState(false)
    const [zipcode, setZipcode] = useState(false)
    const onClickBuySystem = (event) => {
        event.preventDefault()

        setByTel(buyerTel?.current?.value)
        setByEmail(buyeremail?.current?.value)

        const IMP = window.IMP;
        IMP.init("imp49910675");

        IMP.request_pay({
            pg: "html5_inicis",
            pay_method: "card",
            //merchant_uid: "결제 번호",
            name: sellName,
            amount: sellPrice,
            buyer_email: byemail,
            buyer_name: buyName,
            buyer_tel: bytel,
            buyer_addr: zip.address,
            buyer_postcode: zip.zoncode,
            m_redirect_url: "/"
        }, function (rsp) {
            if (rsp.success) {
                router.push({
                    pathname: '/payments_complete',
                    query: {
                        address: zip.address
                    }
                })
            } else {
                Modal.error({
                    content: "결제 실패"
                })
            }
        });
    }


    const handleComplete = (data) => {
        setZipcode(false)
        setZip(data)
    }

    const onZipCode = () => {
        setZipcode(true)
    }

    return (
        <div>
            <ModalBlack></ModalBlack>
            <Head>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
            </Head>
            <PaymentsStyles>
                <h3>결제하기</h3>
                <div>
                    <label>구매자 전화번호</label>
                    <input ref={buyerTel} type="text" placeholder="전화번호를 입력해주세요." />
                </div>
                <div>
                    <label>구매자 이메일</label>
                    <input ref={buyeremail} type="text" placeholder="이메일을 입력해주세요." />
                </div>
                <div>
                    <label>배송지</label>
                    <button className="zipcode__button" onClick={onZipCode}>찾아보기</button>
                    {zip && <p className="zip"><span>{zip.address}</span> 의 주소로 상품이 배송됩니다. 확인 하셨나요?</p>}
                </div>
                {
                    zipcode &&
                    <DaumPostcode onComplete={handleComplete} />
                }
                <Paycontrol>
                    <PayBtn onClick={onClickBuySystem}>결제하기</PayBtn>
                    <PayBtn onClick={() => setOnPay(prev => !prev)}>결제취소</PayBtn>
                </Paycontrol>
            </PaymentsStyles>
        </div>
    );
};

export default Payment;