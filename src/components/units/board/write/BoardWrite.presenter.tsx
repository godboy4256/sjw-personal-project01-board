import Uploads01 from "../../../commons/uploads/Uploads01.container";
import {
  WriterWrapper,
  WritleSummury,
  WriterContainer,
  SubmitButton,
  UploadsContainer
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <WritleSummury>
        <div></div>
        <h3>{props.isEdit ? "게시판 수정" : "게시판 등록"}</h3>
      </WritleSummury>
      <WriterWrapper>
        <WriterContainer>
          <div>
            <label>작성자</label>
            <input
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeMyWriter}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <div>{props.myWriterError}</div>
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangeMyPassword}
            />
            <div>{props.myPasswordError}</div>
          </div>
          <div>
            <label>제목</label>
            <input
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeMyTitle}
              defaultValue={props.data?.fetchBoard.title}
            />
            <div>{props.myTitleError}</div>
          </div>
          <div>
            <label>내용</label>
            <textarea
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeMyContents}
              defaultValue={props.data?.fetchBoard.contents}
            />
            <div>{props.myContentsError}</div>
          </div>
          <div>
            <label>사진첨부</label>
            <UploadsContainer>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </UploadsContainer>
          </div>
          <div>
            <SubmitButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </SubmitButton>
          </div>
        </WriterContainer>
      </WriterWrapper>
    </>
  );
}
