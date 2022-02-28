import { gql, useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useState } from "react";
import { QuestionStyles } from "../styles";
import EditQuestion from "./editQuestion";
import QuestionAnswer from "./QuestionAnswer";


const DELETE_USED_ITEM_QUESTION = gql`
    mutation deleteUseditemQuestion($useditemQuestionId:ID!){
        deleteUseditemQuestion(useditemQuestionId:$useditemQuestionId)
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


const Question = ({ ques }) => {
    const [onEdit, setOnEdit] = useState(false)
    const [onQuesAns, setOnQuesAns] = useState(false)
    const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION)
    const QDelete = async () => {
        try {
            const result = await deleteUseditemQuestion({
                variables: {
                    useditemQuestionId: ques._id
                },
                refetchQueries: [
                    FETCH_USED_ITEM_QUESTIONS
                ]
            })
            console.log(result)
            Modal.success({ content: "댓글이 삭제되었습니다." })
        } catch (error) {
            console.log(error)
        }
    }

    const QEdit = () => {
        setOnEdit(prev => !prev)
    }

    const onQuestionAnswer = () => {
        setOnQuesAns(prev => !prev)
    }

    return (
        <>
            <QuestionStyles>
                <div>
                    <p>{ques.contents}</p>
                    <span><span className="question__user">{ques.user.name}</span> 님의 질문 입니다.</span>
                </div>
                <div>
                    <button onClick={QEdit} className="edit"><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button onClick={QDelete} className="delete" ><FontAwesomeIcon icon={faTrash} /></button>
                    <p className="refText">* 다른 사용자의 질문/답변을 임의로 수정/삭제 할 수 없습니다.</p>
                    {onEdit ? <EditQuestion id={ques._id} setOnEdit={setOnEdit} /> : null}
                </div>
                <button className="answer" onClick={onQuestionAnswer}>
                    <div>답글 보기</div>
                    <div><FontAwesomeIcon icon={faSortDown} /></div>
                </button>
            </QuestionStyles>


            {onQuesAns ? <QuestionAnswer id={ques._id} /> : null}
        </>

    );
};

export default Question;