import { GlobalContext } from "../../../pages/_app";
import { useContext, useState } from "react";
import { message, Modal } from "antd";
import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import PaymentModal from "../../components/commons/paymentModal/paymentModal";
import { IQuery } from "../types/generated/types";

export const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      impUid
      amount
      status
    }
  }
`;

const ButtonDelete = styled.button`
  width: 170px;
  padding: 10px 0 ;
  display: block;
  margin:30px 0;
  background-color: #fca103;
  color:#fff;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  & div> span{
    color:#fca103;
  }
  & select{
    margin-top: 40px;
    width: 50%;
    border:1px solid #fca103;
    padding: 10px;
    outline: none;
  }
`;


export const InputWrapper = styled.form``;
export const label = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;
export const Titlelabel = styled.div`
  font-size: 35px;
  margin: 50px;
  font-weight: bold;
  text-align: center;
  color: green;
`;
export const Main = styled.div`
  width: 1080px;
  border: 1px solid green;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  margin: 200px auto;
`;

const PayBtn = styled.button`
  width: 120px;
  padding:10px 0;
  background-color:#fca103;
  color:#fff;
  margin-left: 20px;
  cursor: pointer;
`;

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export default function PurchaseItem(props) {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
  const { userInfo, setPoint } = useContext(GlobalContext);
  const userInfo2 = data?.fetchUserLoggedIn;
  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT);
  const [amount, setAmount] = useState(0);
  const [modal, setModal] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    let totalPrice = 0;
    if (props.allData) props.allData.forEach((x) => (totalPrice += x.price));
    console.log("window.IMP");
    console.log(window.IMP);
    const IMP = window.IMP;

    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid중복되면 에러
        name: `${props.allData
          ? `${props.allData[0].name}외 ${props.allData.length}명  `
          : props.data
            ? props.data?.name
            : "포인트"
          }`,
        amount: props.allData
          ? totalPrice
          : props.data
            ? props.data.price
            : amount,
        buyer_email: `${userInfo.email}`,
        buyer_name: `${userInfo.name}`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url 모바일 결제시 돌아갈 주소
      },
      (rsp) => {
        // callback
        console.log(rsp);
        if (rsp.success) {
          const createPoint = async (rsp) => {
            const ddd = await createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
            });
            console.log(ddd);
          };
          createPoint(rsp);
          setPoint((prev) => Number(prev) + Number(amount));
          const prevPoint =
            Number(JSON.parse(localStorage.getItem("point"))) || 0;
          localStorage.setItem(
            "point",
            JSON.stringify(prevPoint + Number(amount))
          );
          message.info("결제를 완료했습니다.");
        }
      }
    );
    if (!props.data && !props.allData) setIsModalVisible((prev) => !prev);
  };
  const onModal = () => {
    if (!props.data && !props.allData) setIsModalVisible((prev) => !prev);
    else handleOk();
  };
  const setPrice = (event) => {
    setAmount(Number(event.target.value));
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {isModalVisible && (
        <Modal
          title="포인트 충전"
          visible={true}
          onOk={handleOk}
          onCancel={onModal}
          footer={[
            <PayBtn key="back" onClick={onModal}>
              취소하기
            </PayBtn>,
            <PayBtn key="submit" onClick={handleOk}>
              충전하기
            </PayBtn>,
          ]}
        >
          <ModalContainer>
            <div>보유 포인트 : <span>{userInfo2?.userPoint?.amount} p</span></div>
            <div>충전 후  포인트 : <span>{Number(userInfo2?.userPoint?.amount) + amount} p</span></div>
            <select onChange={setPrice}>
              <option>1000원</option>
              <option>3000원</option>
              <option>10000원</option>
              <option>20000원</option>
              <option>30000원</option>
              <option>50000원</option>
            </select>
          </ModalContainer>
        </Modal>
      )}
      <ButtonDelete onClick={onModal}>
        포인트 충전
      </ButtonDelete>
    </>
  );
}
