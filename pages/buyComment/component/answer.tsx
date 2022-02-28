import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { OneAnswer, AnswerEditForm } from "../styles";

const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
    mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput:UpdateUseditemQuestionAnswerInput!,$useditemQuestionAnswerId: ID!){
        updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput:$updateUseditemQuestionAnswerInput,useditemQuestionAnswerId:$useditemQuestionAnswerId){
            _id
        }
    }
`

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId: ID!,$page: Int){
        fetchUseditemQuestionAnswers(useditemQuestionId:$useditemQuestionId,page:$page){
                _id
            contents
        }
    }
`

const Answer = ({
    item,
    deleteAnswer
}) => {
    const refAnswerEdit = useRef()
    const [updateUseditemQuestionAnswer] = useMutation(UPDATE_USED_ITEM_QUESTION_ANSWER)
    const [onEAns, setOnEAns] = useState(false)
    const onEditAnswer = () => {
        setOnEAns(prev => !prev)
    }
    const onEditAnswerCompelate = async (event) => {
        event.preventDefault()
        try {
            const result = await updateUseditemQuestionAnswer({
                variables: {
                    updateUseditemQuestionAnswerInput: {
                        contents: refAnswerEdit.current.value
                    },
                    useditemQuestionAnswerId: item._id
                },
                refetchQueries: [
                    FETCH_USED_ITEM_QUESTION_ANSWERS
                ]
            })
            alert("수정 완료")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <OneAnswer>
                <div>답변 내용 : <span className="answer__contents">{item.contents}</span></div>
                <div>
                    <button onClick={onEditAnswer}>답변 수정</button>
                    <button onClick={deleteAnswer(item._id)}>답변 삭제</button>
                </div>
            </OneAnswer>
            {
                onEAns && <AnswerEditForm onSubmit={onEditAnswerCompelate}>
                    <input type="text" ref={refAnswerEdit} placeholder="답변을 수정하세요." />
                    <button onClick={onEditAnswerCompelate}>답변 수정하기</button>
                    <button type="button" onClick={() => {
                        setOnEAns(prev => !prev)
                    }}>취소</button>
                </AnswerEditForm>
            }
        </>
    );
};

export default Answer;