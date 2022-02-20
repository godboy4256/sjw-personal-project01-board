import { IBoardDetailUIProps } from "./BoardDetail.types";
import {
  DetailContainer,
  DetailHeaderWriter,
  DetailImages,
  DetailWrapper,
  DetailContentsBox,
  DetailTitle,
  DetailPostContents,
  HowFill,
  CommentBox,
  DetailControl
} from "./BoardDetail.styles";
import BoardCommentList from "../../boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../boardComment/write/BoardCommentWrite.container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";


export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailContentsBox>
          <DetailHeaderWriter>
            <span>{props.data?.fetchBoard?.writer} </span>
            님이 작성한 글 입니다.
          </DetailHeaderWriter>
          <div>
            <DetailTitle>
              {props.data?.fetchBoard?.title}
            </DetailTitle>
            <DetailImages>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <img
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </DetailImages>
            <DetailPostContents>{props.data?.fetchBoard?.contents}</DetailPostContents>
            <HowFill>
              <div>
                <button onClick={props.onClickLike}>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <span>{props.data?.fetchBoard.likeCount}</span>
              </div>
              <div>
                <button onClick={props.onClickDislike}>
                  <FontAwesomeIcon icon={faThumbsDown} />
                </button>
                <span>{props.data?.fetchBoard.dislikeCount}</span>
              </div>
            </HowFill>
          </div>
        </DetailContentsBox>
        <CommentBox>
          <BoardCommentWrite />
          <BoardCommentList />
        </CommentBox>
        <DetailControl>
          <li onClick={props.onClickMoveToList}>목록으로</li>
          <li onClick={props.onClickMoveToEdit}>수정하기</li>
          <li onClick={props.onClickDelete}>삭제하기</li>
        </DetailControl>
      </DetailWrapper>


    </DetailContainer>
  );
}
