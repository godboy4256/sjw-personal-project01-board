import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  background-color: #fca103;
  border-radius: 10px;
  margin-right: 24px;
  padding:10px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  & > span{
    display: block;
    margin-right: 5px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
