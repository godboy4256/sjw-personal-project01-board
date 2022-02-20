import styled from "@emotion/styled";

export const WriterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:100px 30px;
`;

export const WritleSummury = styled.div`
  width: 100%;
  padding: 200px 0 100px;
  text-align: center;
  font-size: 50px;
  position: relative;
  background: url('images/board/writer_background.jpg') no-repeat center/cover;
  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    top:0;
    left:0;
  };
  & > h3{
    position: relative;
    z-index: 2;
    color: #fff;
  }
`;

export const WriterContainer = styled.div`
    width:80%;
    height:100%;
    padding: 50px ;
    & input{
      width: 100%;
      background: none;
      border:1px solid #ccc;
      padding:10px;
    }
    & textarea{
      width: 100%;
      background: none;
      height: 300px;
      overflow-y:auto;
      resize: none;
      border:1px solid #ccc;
      padding:10px;
    }
    & label{
      font-size: 16px;
      padding:20px 0 10px;
      display: block;
    }
`;


export const SubmitButton = styled.button`
  margin-top: 100px;
  padding: 10px 30px;
  color:#fff;
  border-radius: 30px;
  background-color: #fca103;
  cursor: pointer;
  font-size: 17px;
`

export const UploadsContainer = styled.div`
  display: flex;
`