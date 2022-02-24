import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

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
    const QEdit = () => { console.log('수정') }
    return (
        <li>
            <p>{ques.contents}</p>
            <span>{ques.user.name}</span>
            <button onClick={QDelete}>댓글 삭제</button>
            <button onClick={QEdit}>댓글 수정</button>
        </li>
    );
};

export default Question;