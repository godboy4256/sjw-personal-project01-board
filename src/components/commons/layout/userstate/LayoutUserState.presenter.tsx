import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';
import MyMenu from '../../myMenu';
import { UserStateStyles } from './LayoutUserState.styles'

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
    }
  }
`;

const LayoutUserStatePresenter = ({ changeHeader }) => {
    const router = useRouter()
    const [onMyMenu, setOnMyMneu] = useState(false)
    const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    const [inOut, setInOut] = useState("")

    const onLogin = () => {
        router.push('/login')
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
    return (
        <UserStateStyles changeHeader={changeHeader}>
            <ul>
                {inOut ? <li onClick={onLogout}>로그아웃</li> : <li onClick={onLogin}>로그인</li>}
                <li onClick={onSignUp}>회원가입</li>
                <li>
                    {inOut && <div className='white'>
                        <span className='user__color'>
                            {data?.fetchUserLoggedIn.name}
                        </span>
                        <span> 님 환영합니다.</span>

                    </div>}
                </li>
                <li>My Point : 0</li>
            </ul>
        </UserStateStyles>
    );
};

export default LayoutUserStatePresenter;