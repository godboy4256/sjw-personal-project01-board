import styled from "@emotion/styled"

export const LoginPageStyles = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background:url("images/login/login_background.jpg") no-repeat center/cover;
    & > h2 {
        font-size: 30px;
        color: #fff;
    };
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width:100%;
    border:1px solid #ccc;
    padding:80px 50px;
    background-color: #fff;
    & > div{
        display: flex;
        flex-direction: column;
    }
    & > div > input {
        border:none;
        background: none;
        border:1px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    };
    & button{
        padding: 10px;
        background-color:#fca103;
        color: #fff;
        cursor: pointer;
        margin-top:30px;
    }
`