import styled from '@emotion/styled';

export const MarketContainer = styled.div`
    width: 100%;
`

export const MarketWrapper = styled.div`
    padding:100px 300px 0;
    & > h2{
        font-size:50px;
        text-align: center;
    }
`

export const MarketItemList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const MarketItem = styled.li`
    width: 30%;
    border: 1px solid #ccc;
    margin-bottom: 50px;
    & img {
        display: none;
    }
    & img:first-child{
        display: block;
        width: 100%;
    }
`

export const MarketImageBox = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    background-color: #000;
    border-bottom: 1px solid #ccc;
`


export const MarketPagination = styled.div`
    display: flex;
    width: 100%;
    padding: 100px 300px;
    justify-content: space-between;
    & > li{
        cursor: pointer;
        font-size: 20px;
    }
`

export const PageColor = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#fca103" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
  font-size: 17px;
  display: block;
`;

export const MarketInfo = styled.div`
    padding: 30px;
    & > h3{
        font-size: 40px;
        margin:0;
        padding: 0;
        line-height: 1;
        margin-bottom: 10px;
        word-break: break-all;
    };
    & > h4 > span{
        color: #fca103;
    };
    & > div {
        font-size: 17px;
    };
    & > div > span{
        color: #fca103;
    }
    & > button{
        margin-top: 20px;
        background-color: #fca103;
        color: #fff;
        padding: 5px 20px;
        cursor: pointer;
        margin-bottom: 20px;
        & .arrow-icon{
            margin-left: 10px;
            transition: .4s;
        }
        &:hover{
            & .arrow-icon{
                margin-left: 20px;
            } 
        } 
    }
`


export const MarkerHeader = styled.header`
    width: 100%;
    background: url('images/layout/market_background.jpeg') no-repeat center/cover;
    padding:250px 0 100px;
    color:#fff;
    position: relative;
    padding-left: 100px;
    &::after{
        content:"";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        background-color: rgba(0,0,0,0.6);
    };
    & >h1{
        position: relative;
        z-index: 1;
        color: #fca103;
        font-size: 70px;
    };
    & >strong{
        position: relative;
        z-index: 1;
        font-weight: 100;
        font-size: 17px;
    }
`

export const MarketMenu = styled.ul`
    width: 100%;
    display: flex;
    background-color: #fca103;
    padding: 15px 300px;
    justify-content: space-between;
    & > li{
        color: #fff;
        font-size: 17px;
        cursor: pointer;
    }
`

export const GoSellPageButton = styled.button`
    background-color: #fca103;
    color: #fff;
    font-size: 17px;
    padding: 10px 30px;
    border-radius: 30px;
    margin-bottom: 30px;
    cursor: pointer;
`

