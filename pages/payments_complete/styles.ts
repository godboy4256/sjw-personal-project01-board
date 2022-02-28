import styled from "@emotion/styled"

export const PaymentsCompletesStyles = styled.div`
    width: 100%;
    height: 100vh;
    padding:300px 100px 100px;
    background-color: currentcolor;
    & div{
        border: 1px solid #ccc;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        font-size: 20px;
        background-color: #fff;
    }
    & p > span {
         color: #fca103;  
    }
    & button{
        cursor:pointer;
        background-color: #fca103;
        color: #fff;
        padding: 10px 30px;
        margin-top:50px;
        font-size: 17px;
    }
`