import styled from "@emotion/styled";

export const DetailContainer = styled.div`
  width: 100%;
  background: url('/images/detail/detail_background.jpg') no-repeat center/cover;
  padding: 200px 100px;
`

export const DetailHeaderWriter = styled.h2`
  & > span{
    color: #fca103;
  }
`

export const CommentBox = styled.div`
  width: 30%;
`

export const HowFill = styled.div`
  margin-top: 50px;
  display: flex;
  color: #fca103;
  & button {
    font-size: 30px;
    margin-right: 10px;
    background: none;
    cursor: pointer;
  }
  & > div {
    font-size: 30px;
    margin-right: 30px;
  }
`


export const DetailTitle = styled.h3`
  font-size:30px;
`

export const DetailImages = styled.div`
  width: 100%;
  & > img {
    width:100%
  }
`

export const DetailPostContents = styled.div`
  border-radius: 20px;
  border:1px solid #ccc;
  padding:30px;
  margin-top: 50px;
`


export const DetailContentsBox = styled.div`
  padding:30px;
  border:1px solid #ccc;
  margin-right: 30px;
`

export const DetailWrapper = styled.div`
  width:100%;
  background-color:#fff;
  padding:50px;
  display: flex;
`

