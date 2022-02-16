import Uploads01 from "../../../commons/uploads/Uploads01.container";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeMyWriter}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.Error>{props.myWriterError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangeMyPassword}
            />
            <S.Error>{props.myPasswordError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeMyTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.myTitleError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeMyContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.myContentsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
