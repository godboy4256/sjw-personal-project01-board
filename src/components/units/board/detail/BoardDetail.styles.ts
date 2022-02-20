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
  width: 100%;
  background-color: #fff;
  padding: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  & > div:last-child {
    max-height: 800px;
    overflow-y: auto;
  }
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
  width: 100%;
`


export const DetailContentsBox = styled.div`
  padding:30px;
  border:1px solid #ccc;
  margin-right: 30px;
  width: 100%;
  background-color: #fff;
`

export const DetailWrapper = styled.div`
  width:100%;
  padding:50px;
  display: flex;
  flex-direction: column;
`

export const DetailControl = styled.ul`
  margin-top: 10px;
  width:100%;
  background-color: #fff;
  display: flex;
  padding:30px;
  & > li{
    background-color: #fca103;
    color: #fff;
    padding: 5px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`
