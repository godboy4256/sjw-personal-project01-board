import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IQuery, IQueryFetchPointTransactionsOfLoadingArgs } from '../../../../commons/types/generated/types';
import PaymentModal from '../../paymentModal/paymentModal';
import { UserStateStyles } from './LayoutUserState.styles'

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
    _id
        email
      name
      createdAt
      userPoint {
        amount
      }
    }
  }
`;


const LayoutUserStatePresenter = ({ changeHeader }) => {


    const router = useRouter()
    const [onMyMenu, setOnMyMneu] = useState(false)
    const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    const [inOut, setInOut] = useState("")
    const [modal, setModal] = useState(false);
    const onLogin = () => {
        router.push('/login')
    }
    const goPointDetail = () => {
        router.push('/pointdetail')
    }
    const onLogout = () => {
        localStorage.removeItem('accessToken')
        window.location.reload();
    }
    const onSignUp = () => {
        router.push('/signup')
    }
    const onMyPage = () => {
        setOnMyMneu((prev) => !prev)
    }
    useEffect(() => {
        setInOut(localStorage.getItem("accessToken"))
    }, [])

    const onClickOpenModal = () => {
        setModal(true);
    };
    return (
        <>
            <UserStateStyles changeHeader={changeHeader}>
                {inOut && <div className='white'>
                    <span className='user__color'>
                        {data?.fetchUserLoggedIn.name}
                    </span>
                    <span> 님 환영합니다.</span>
                </div>}
                <ul>
                    {inOut ? <li onClick={onLogout}>로그아웃</li> : <li onClick={onLogin}>로그인</li>}
                    <li onClick={onSignUp}>회원가입</li>
                    <li onClick={() => { router.push('/mypage') }}>
                        마이페이지
                    </li>
                    <li>
                        <span>My Point : <span className='point'>{data?.fetchUserLoggedIn?.userPoint.amount}</span> </span>
                        <button className='charge' onClick={onClickOpenModal}>충전</button>
                    </li>
                </ul>
            </UserStateStyles>
            {
                modal && <PaymentModal setModal={setModal} />
            }
        </>

    );
};

export default LayoutUserStatePresenter;