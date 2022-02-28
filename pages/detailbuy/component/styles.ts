import styled from '@emotion/styled'


export const DetailBuyContainer = styled.div`
    width: 100%;
    background-color: currentcolor;
    padding: 300px 50px 100px;
`

export const DetailBuyWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 50px;
`

export const DatailLeft = styled.div`
    width: 50%;
    border-right: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
        width: 80%;
    };

`

export const DatailRight = styled.div`
    width: 50%;
    padding: 50px;
    & h3{
        font-size: 20px;
    };
    & .seller__name {
        padding: 20px 0;
    }
    & .seller__name span {
        color: #fca103;
    };
    & .price {
        & span{
            color: #fca103;
        }
        padding: 30px 0;
        font-size: 30px;
    }
    & .contents>div{
        padding: 30px;
        border:1px solid #ccc
    } 
    & .contents{
        margin-bottom: 20px;
    }
    & .remarks >div{
        padding:30px;
        border:1px solid #ccc;
        margin-top: 10px;
    }
`

export const DetailTop = styled.div`
    width: 100%;
    display: flex;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 30px 0;
`

export const DetailControl = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
    border-bottom: 1px solid #ccc;
    flex-direction: column;
    padding-bottom: 20px;
    & div > button {
        padding: 10px;
        background-color: #fca103;
        color: #fff;
        margin-right: 10px;
        cursor: pointer;
    };
    & .ref__text{
        font-size: 15px;
        color: #777;
        padding-top: 5px;
    }
`


export const BuyBtn = styled.button`
    background: none;
    background-color:#fca103;
    padding: 10px 60px;
    display: block;
    margin:50px auto 0;
    color: #fff;
    font-size: 19px;
    cursor: pointer;
`