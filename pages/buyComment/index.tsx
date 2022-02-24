import { useEffect, useRef, useState } from "react";
import Question from "./component";
import { v4 as uuidv4 } from "uuid";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

const CREATE_USED_ITEM_QUESTION = gql`
    mutation createUseditemQuestion($createUseditemQuestionInput:CreateUseditemQuestionInput!,$useditemId:ID!){
        createUseditemQuestion(createUseditemQuestionInput:$createUseditemQuestionInput,useditemId:$useditemId){
            _id
        }
    }
`

const FETCH_USED_ITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($useditemId:ID!,$page:Int){
        fetchUseditemQuestions(useditemId:$useditemId,page:$page){
            _id
            contents
            user{name}
        }
  }
`


const BuyComment = ({ itemId }) => {

    const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
        variables: {
            useditemId: itemId
        }
    })

    const refQues = useRef()
    const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION)
    const onQuesTion = async (event) => {
        event.preventDefault()
        try {
            const result = await createUseditemQuestion({
                variables: {
                    createUseditemQuestionInput: {
                        contents: refQues?.current?.value
                    },
                    useditemId: itemId
                },
                refetchQueries: [
                    FETCH_USED_ITEM_QUESTIONS
                ]
            })

            Modal.success({ content: "댓글 달기" })
        } catch (error) {
            console.log(error)
        }
        refQues.current.value = ""
    }



    return (
        <div>
            <form onSubmit={onQuesTion}>
                <input ref={refQues} type="text" placeholder="댓글을 입력해주세요" />
                <button>댓글 달기</button>
            </form>
            {
                data?.fetchUseditemQuestions.map(el => {
                    return <Question key={uuidv4()} ques={el} />
                })
            }
        </div>
    );
};

export default BuyComment;