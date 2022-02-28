import styled from "@emotion/styled"

export const PaymentsStyles = styled.div`
    position:fixed;
    z-index: 4;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width:700px;
    width: 100%;
    background-color: #fff;
    display:flex;
    flex-direction: column;
    padding: 50px;
    & > h3{
        font-size: 30px;
        text-align: center;
    }
    & > div{
        margin-bottom: 20px;
    }
    & > div > label {
        display: block;
        margin-bottom: 5px;
    }
    & > div > .zipcode__button {
        width: 30%;
        background: none;
        background-color: #ccc;
        padding: 10px;
        cursor: pointer;
    }
    & input{
        width: 100%;
        padding: 10px;
        border:none;
        outline: none;
        border:1px solid #ccc;
    }
    & .zip{
        margin-top: 5px;
        & span{
            color: #fca103;
        }
    }
`

export const ModalBlack = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 3;
`

export const Paycontrol = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

export const PayBtn = styled.button`
    background-color: #fca103;
    color: #fff;
    cursor: pointer;
    padding: 10px 20px;
    display: block;
    width: 47%;
`

