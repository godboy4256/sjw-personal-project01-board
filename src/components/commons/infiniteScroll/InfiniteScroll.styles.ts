import styled from '@emotion/styled';


export const InfiniteScrollListContainer = styled.ul`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InfiniteScrollList = styled.li`
    width: 100%;
    max-width: 700px;
    border-radius: 20px;
    padding: 50px;
    margin-bottom: 30px;
    cursor: pointer;
    background-color:#fff;
    transition:.4s;
    &:hover {
       transform:scale(1.03);
    }
    `

export const InfiniteScrollTitle = styled.h2`
    font-size:30px;
    color: #fca103;
    width:100%;
    border-bottom: 1px solid #fca103;
`


export const InfiniteScrollWriterImgBox = styled.div`
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
`

export const InfiniteScrollWriter = styled.h3`
    & > span{
        color: #fca103;
    }
`

export const InfiniteScrollListImage = styled.img`
    width: 43%;
    margin-bottom: 20px;
`


export const InfiniteScrollContents = styled.p`
    width: 100%;
    padding: 10px 0;
    font-size:17px;
    word-break: break-all;
`

