import styled from "@emotion/styled";

export const BuyQuestionContainer = styled.div`
    width: 100%;
    border:1px solid #ccc;
    padding: 30px;
    margin-top:30px;
    & > h3{
        font-size: 30px;
        padding: 30px 0;
        text-align: center;
    }
    & .ques{
        border: none;
        background: none;
        border:1px solid #ccc;
        padding: 5px;
        outline: none;
        width: 400px;
        box-sizing: border-box;
    }
    & form > button{
        padding: 5px 20px;
        margin-left: 10px;
        color: #fff;
        background-color: #fca103;
    }
`

export const QuestionStyles = styled.li`
    padding: 20px 0;
    border-bottom: 1px solid #ccc;

    & .question__user{
        color: #fca103;
       
    }
    & .edit {
        background:none;
        color: #fca103;
        font-size:17px;
        margin-right: 10px;
        cursor: pointer;
        margin-top: 10px;
    }
    & .delete {
        background:none;
        color: #fca103;
        font-size:17px;
        cursor: pointer;
        margin-top: 10px;
    }
    & .answer {
        margin-top: 10px;
        display: flex;
        background:none;
        align-items:center;
        cursor: pointer;
        & div:last-child{
            margin-left: 10px;
            color: #fca103;
            margin-top: 0;
        }
    }
    & .refText{
        color: #777;
    }
    
`

export const EditStyles = styled.form`
    padding-top: 10px;
    & .edit__style{
        width: 200px;
        padding: 5px;
        border:none;
        border:1px solid #ccc;
        outline: none;
    }
`

export const AnswerStyles = styled.form`
    padding: 10px 0 20px;
    border-bottom: 1px solid #ccc;
    & input{
        width: 300px;
        padding: 5px;
        border:none;
        border:1px solid #ccc;
        outline: none;
    }
    
`

export const AnswerListStyles = styled.ul`
    border:1px solid #ccc;
    padding:30px;
    margin-top: 20px;
    & .no_answer{
        text-align: center;
    }
`

export const OneAnswer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    align-items: center;
    padding: 10px 0;
    :first-child{
        border-top: 1px solid #ccc;
    }
    & button{
        background-color: #fca103;
        color: #fff;
        padding: 5px;
    }
    & button:first-child{
        margin-right: 10px;
    }
    & .answer__contents{
        color: #fca103;
    }
`

export const AnswerEditForm = styled.div`
    padding: 10px 0 20px;
    border-bottom: 1px solid #ccc;
    & input{
        width: 300px;
        padding: 5px;
        border:none;
        border:1px solid #ccc;
        outline: none;
    }
    & button{
        padding: 5px 20px;
        margin-left: 10px;
        color: #fff;
        background-color: #fca103;
        cursor: pointer;
    }

`