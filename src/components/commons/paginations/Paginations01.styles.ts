import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#fca103" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
  font-size: 17px;
  display: block;
`;


export const PageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const PrevButton = styled.span`
  width: 30px;
  height: 30px;
  background-color: #fca103;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content:center;
  align-items: center;
  margin-right:30px;
  cursor: pointer;
`;

export const NextButton = styled.span`
  width: 30px;
  height: 30px;
  background-color: #fca103;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content:center;
  align-items: center;
  margin-left:30px;
  cursor: pointer;
`;
