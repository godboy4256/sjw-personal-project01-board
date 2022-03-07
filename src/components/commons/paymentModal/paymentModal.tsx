import { ChangeEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IMutation, IMutationCreatePointTransactionOfLoadingArgs, IQuery } from "../../../commons/types/generated/types";
import Head from "next/head";
import styled from "@emotion/styled";

const ChargeContainer = styled.div`
  width: 500px !important;;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 30px;
  border:1px solid #fca103;
  border-radius: 20px;
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  & > h2{
    padding-top: 30px;
  }
  & .charge_button_box {
    width:100%;
    display: flex;
    justify-content: center;
  }
  & .charge_button_box button{
    background-color:#fca103 ;
    color: #fff;
    padding: 5px 20px;
    margin-top: 30px;
    cursor: pointer;
  }
  & .charge_button_box button:first-child{
    margin-right: 10px;
  }
`

const ChargeInfo = styled.div`
  & span{
    color:#fca103;
  }
`

const ChargeSelect = styled.select`
   width: 50%;
    border:1px solid #fca103;
    padding: 10px;
    outline: none;
`

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      impUid
      status
      statusDetail
    }
  }
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

export default function PaymentModal({ setModal }) {
  function useFetchUserInfo() {
    const { data } =
      useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
    return { data };
  }

  const [email, setEmail] = useState("")
  const emailsetting = (event) => {
    setEmail(event.target.value)
  }

  const { data } = useFetchUserInfo();
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const userInfo = data?.fetchUserLoggedIn;

  const onChangeAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const price = value.substring(0, value.length - 1);

    setAmount(Number(price));
  };

  const onClickPayment = () => {
    // @ts-ignore
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", => 중복되지 않는 고유값을 주어야한다.(안그러면 에러남), 아예 안쓰면 자동으로 id를 생성해준다.
        name: "포인트 충전",
        amount,
        buyer_email: userInfo?.name,
        buyer_name: userInfo?.name,
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            alert("결제에 성공하였습니다.");
            window.location.reload()
            setModal(false)
          } catch (error) {
            if (error instanceof Error) {
              alert("서버 오류로 인해 결제에 실패하였습니다.");
            }
          }
          // 1. 백엔드에 결제관련 데이터 념겨주기
          // => 즉, 뮤테이션 실행하기!!!
          // ex, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하였습니다.");
        }
      }
    );
  };

  return (
    <ChargeContainer>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
        <meta property="og:title" content="나의 게시판입니다" />
        <meta property="og:description" content="저의 게시판에 온 것을 환영합니다." />
        <meta property="og:title" content="https://dullyshin.github.io/2018/08/30/HTML-imgLink/#lg=1&slide=0" />
      </Head>
      <ChargeInfo>
        <div>보유 포인트 : <span>{userInfo?.userPoint?.amount} p</span></div>
        <div>충전 후  포인트 : <span>{Number(userInfo?.userPoint?.amount) + amount} p</span></div>
      </ChargeInfo>
      <h2>충전하기</h2>
      <ChargeSelect onChange={onChangeAmount}>
        <option>1000원</option>
        <option>3000원</option>
        <option>10000원</option>
        <option>20000원</option>
        <option>30000원</option>
        <option>50000원</option>
      </ChargeSelect>
      {/* <input onChange={emailsetting} type="text" placeholder="이메일을 입력해주세요." /> */}
      <div className="charge_button_box">
        <button onClick={onClickPayment}>충전하기</button>
        <button onClick={() => setModal(false)}>취소하기</button>
      </div>
    </ChargeContainer>
  );
}
