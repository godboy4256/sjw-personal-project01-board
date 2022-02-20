import {
  ConmmentContainer,
  CommentStyle,
  CommentRating,
  CommentButton,
  CommentTitle,
  WriterInfo,
  Star
} from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <ConmmentContainer>
      {!props.isEdit && (
        <>
          <CommentTitle>댓글 작성</CommentTitle>
        </>
      )}
      <CommentStyle>
        <span>{props.myContents.length}/100</span>
        <textarea
          maxLength={100}
          defaultValue={props.el?.contents}
          onChange={props.onChangeMyContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <WriterInfo>
          <input
            placeholder="작성자"
            readOnly={!!props.el?.writer}
            defaultValue={props.el?.writer}
            onChange={props.onChangeMyWriter}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeMyPassword}
          />
        </WriterInfo>
        <CommentRating>
          <h5>별점을 주세요!</h5>
          <Star onChange={props.onChangeStar} />
        </CommentRating>

      </CommentStyle>
      <div>
        <CommentButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </CommentButton>
      </div>
      {
        props.isEdit && <button onClick={() => { props.setIsEdit(false) }}>취소</button>
      }
    </ConmmentContainer >
  );
}
