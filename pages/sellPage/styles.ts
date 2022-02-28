import styled from '@emotion/styled'

export const SellPageContainer = styled.div`
    width: 100%;
    background-color: currentcolor;
    padding: 300px 100px 100px;
`

export const SellPageWrapper = styled.div`
    background-color: #fff;
    padding:100px 50px;
    & div > label{ 
        padding-top: 30px;
        margin-bottom: 10px;
        display: block;
    }
    & div > h4{ 
        padding-top: 30px;
    }
    & div input{ 
        border:none;
        background:none;
        border:1px solid #ccc;
        padding: 10px;
        width: 100%;
    }
    & #file_img{
        display: none;
    }
    & #file_img_label{
        color: #fff;
        background-color: #fca103;
        padding: 10px;
        margin-bottom: 30px;
        cursor: pointer;
        width: 10%;
        text-align: center;
    }
`

export const SellPageTitle = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
`

export const SellForm = styled.form`
    width: 100%;
   & .top__two{
       display: flex;
       justify-content: space-between;
   }
   & .top__two > div{
       width: 49%;
   }
`

export const SellButton = styled.button`
   background-color: #fca103;
   color: #fff;
   padding: 10px 50px;
   cursor: pointer;
   margin-top:100px;
   margin-right: 20px;
`

export const SellImgbox = styled.div`
   border:1px solid #ccc;
   padding: 20px;
   & >div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
   }
   & div>div{
       width: 30%;
       height: 400px;
       overflow:hidden;
       border:1px solid #ccc;
   }
   & div>div>img{
       width: 100%;
   }
`

export const SellControl = styled.div`
    display: flex;
`
