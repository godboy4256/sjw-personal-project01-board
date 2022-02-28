import { gql, useMutation, useQuery } from "@apollo/client";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnswerListStyles, AnswerStyles } from "../styles";
import Answer from "./answer";


const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
    mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!,$useditemQuestionId: ID!){
        createUseditemQuestionAnswer(createUseditemQuestionAnswerInput:$createUseditemQuestionAnswerInput,useditemQuestionId:$useditemQuestionId){
            user{_id}
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




const DELTEE_USED_ITEM_QUESTION_ANSWER = gql`
    mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId:ID!){
        deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
    }
`



const QuestionAnswer = ({ id }) => {

    const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
        variables: {
            useditemQuestionId: id
        }
    })
    const [deleteUseditemQuestionAnswer] = useMutation(DELTEE_USED_ITEM_QUESTION_ANSWER)
    const [createUseditemQuestionAnswer] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER)


    const refAnswer = useRef()


    const submitAnswer = async (event) => {
        event.preventDefault()
        try {
            const result = await createUseditemQuestionAnswer({
                variables: {
                    createUseditemQuestionAnswerInput: {
                        contents: refAnswer.current.value
                    },
                    useditemQuestionId: id
                },
                refetchQueries: [
                    FETCH_USED_ITEM_QUESTION_ANSWERS
                ]
            })
            result && alert("답변 완료")
            refAnswer.current.value = ""
        } catch (error) {
            console.log(error)
        }
    }

    const deleteAnswer = (answerid) => () => {
        deleteUseditemQuestionAnswer({
            variables: {
                useditemQuestionAnswerId: answerid
            },
            refetchQueries: [
                FETCH_USED_ITEM_QUESTION_ANSWERS
            ]
        })
    }




    return (
        <>
            <AnswerStyles onSubmit={submitAnswer}>
                <input ref={refAnswer} type="text" placeholder="질문에 대한 답변글을 작성해보세요." />
                <button>답변하기</button>
            </AnswerStyles>
            <AnswerListStyles>
                {
                    data?.fetchUseditemQuestionAnswers.length > 0 ? data?.fetchUseditemQuestionAnswers?.map(item => {
                        return <Answer
                            key={uuidv4()}
                            item={item}
                            deleteAnswer={deleteAnswer}
                        />
                    }) : <li className="no_answer">답변이 없습니다.</li>
                }
            </AnswerListStyles>
        </>
    );
};

export default QuestionAnswer;