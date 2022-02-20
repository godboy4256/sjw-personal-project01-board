import styled from "@emotion/styled";

export const BoardListContainerStyles = styled.div`
 max-width: 700px;
 width: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;
 background-color: #fff;
 border-radius:20px;
 padding: 50px;
 margin:0 auto;
`

export const BoardListTitleStyles = styled.h4`
    margin:0;
`

export const BoardListUuTtileList = styled.ul`
    margin: 50px 0;
`

export const BoardListStyles = styled.li`
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    justify-content: space-between;
    line-height:1;
    cursor: pointer;
    transition: .4s;
    &:hover{
        background-color: #f0f0f0;
    };
`

export const BoardListWriterStyles = styled.h3`
    margin-bottom: 0;
    & > span{
        color:#fca103 ;
        margin-right: 5px;
    };
`



export const IndiCator = styled.div`

`



