import styled from "@emotion/styled";


export const WorldCupContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WorldCupHeader = styled.div`
    width: 100%;
    padding: 200px 0 100px;
    text-align: center;
    font-size: 50px;
    position: relative;
    background: url(images/board/writer_background.jpg) no-repeat center/cover;
    & > h3{
    position: relative;
    z-index: 2;
    color: #fff;
    }
    & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
}
`


export const FlexBox = styled.div`
  width: 1200px;
  height: 500px;
  border:1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .flex-1 {
    width: 50%;
    height: 100%;
    overflow: hidden;
    background-color: black;
    position: relative;
    cursor: pointer;
    text-align: center;
  }
  .flex-1:hover > img {
    transform: scale(1.05);
    opacity: 0.8;
  }
  .animal-img {
    width: 60%;
    transition: 0.4s;
  }
  .name {
    z-index: 3;
    color: #fff;
    font-size: 50px;
  }
`;

