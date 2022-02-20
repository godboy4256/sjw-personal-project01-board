import styled from "@emotion/styled";
import { Rate } from "antd";

export const Star = styled(Rate)`
    width: 100%;
`;

export const ConmmentContainer = styled.div`
    width: 50%;
    margin-right: 10px;
    border-right:1px solid #ccc;
    padding-right: 30px;
    margin-right: 30px;
`;

export const CommentRating = styled.div`
    margin:10px 0;
    & > h5{
        margin-bottom: 0;
        font-size: 17px;
        font-weight:700;
    }
`;

export const CommentTitle = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 30px 0;
`


export const CommentStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & input {
        width: 49%;
        padding: 5px;
        margin-bottom: 5px;
        outline: none;
        border:none;
        background: none;
        border:1px solid #ccc
    };
    & textarea {
        resize: none;
        height: 100px;
        padding: 10px;
        margin-bottom: 10px;
        outline: none;
        border-color: #ccc;
        margin-top: 10px;
    }
`;

export const CommentButton = styled.div`
    width: 50%;
    border:none;
    background: none;
    background-color: #fca103;
    padding: 10px 20px;
    margin:10px 0;
    text-align: center;
    color: #fff;
    cursor: pointer;
`

export const WriterInfo = styled.div`
    display: flex;
    justify-content: space-between;
`