import styled from "@emotion/styled";
import { Rate } from "antd";

export const Star = styled(Rate)`
`;


export const Comments = styled.div`
  width:100%;
  border-bottom: 1px solid #ccc;
  padding:10px 0;
  max-height: 400px;
  overflow-y: auto;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  margin-right: 15px;
  padding:5px;
  background-color: #fca103;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  padding:5px;
  background-color: #fca103;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
`;

