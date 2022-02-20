import styled from '@emotion/styled';

export const BoardLayoutContainer = styled.div`
    width: 100%;
    padding: 200px 30px 100px;
    background:url('images/board/list/board_background.jpg') no-repeat center/cover;
    background-attachment: fixed;
`

export const BoardSetting = styled.div`
    display:flex;
    margin-bottom: 50px;
    position: fixed;
    top:150px;
    left: 30px;
    flex-direction: column;
`

export const BoardTypeChangeButton = styled.button`
    border:none;
    background:none;
    background-color: #fff;
    padding:10px 20px;
    margin-right:20px;
    border-radius:20px;
    cursor: pointer;
    transition:.4s;
    &:hover{
        background-color: #f0f0f0;
    }
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`

export const BoardAddButton = styled.button`
    border:none;
    background:none;
    padding:10px 20px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content:center ;
    cursor: pointer;
    transition:.4s;
    &:hover{
        background-color: #f0f0f0;
    }
    & > img{
        width: 20px;
        margin-right:10px;
    }
`
