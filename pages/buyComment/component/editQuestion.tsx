import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import React, { useRef } from 'react';
import { EditStyles } from '../styles';

const UPDATE_USED_ITEM_QUESTION = gql`
    mutation updateUseditemQuestion($updateUseditemQuestionInput:UpdateUseditemQuestionInput!,$useditemQuestionId:ID!){
        updateUseditemQuestion(updateUseditemQuestionInput:$updateUseditemQuestionInput,useditemQuestionId:$useditemQuestionId){
            _id
            user{_id}
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


const EditQuestion = ({ id, setOnEdit }) => {
    const refEdit = useRef()
    const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION)
    const updateSubmit = async (event) => {
        event.preventDefault()
        try {
            const result = await updateUseditemQuestion({
                variables: {
                    updateUseditemQuestionInput: {
                        contents: refEdit?.current?.value
                    },
                    useditemQuestionId: id
                },
                refetchQueries: [
                    FETCH_USED_ITEM_QUESTIONS
                ]
            })
            Modal.success({ content: "댓글을 수정하였습니다." })
        } catch (error) {
            console.log(error)
        }

    }
    return <EditStyles onSubmit={updateSubmit}>
        <input className='edit__style' ref={refEdit} type="text" placeholder='댓글을 수정하세요.' />
        <button>수정</button>
        <button type='button' onClick={() => { setOnEdit(prev => !prev) }}>취소</button>
    </EditStyles>
};

export default EditQuestion;