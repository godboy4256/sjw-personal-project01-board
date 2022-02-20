import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  Star,
  Comments,
  EditButton,
  DeleteButton
} from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] =
    useMutation<
      Pick<IMutation, "deleteBoardComment">,
      IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }


  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router?.query?.aaa },
          },
        ],
      });
      setIsOpenDeleteModal(prev => !prev);
      Modal.success({ content: "삭제 되었습니다." })
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(prev => !prev);
  }

  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  return (
    <div>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={onClickOpenDeleteModal}>
          <div>비밀번호 입력: </div>
          <input type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <Comments>
          <div>
            <div>
              <div>
                <h2>{props.el?.contents}</h2>
                <Star value={props.el?.rating} disabled />
              </div>
              <p>댓글 작성자 : {props.el?.writer}</p>
            </div>
            <div>
              <EditButton onClick={onClickUpdate}>댓글 수정</EditButton>
              <DeleteButton onClick={onClickOpenDeleteModal}>댓글 삭제</DeleteButton>
            </div>
          </div>
        </Comments>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
