import styled from '@emotion/styled';

export const UserStateStyles = styled.nav`
    width: 100%;
    border-bottom: ${((props: any) => props.changeHeader ? "1px solid #fca103" : "1px solid #fff")};
    padding: 10px 0;
    margin-bottom: 10px;
    & > ul {
        display: flex;
        color: #fff;
        justify-content: flex-end;
    }
    & > ul > li {
        margin-left: 30px;
        color: ${((props: any) => props.changeHeader ? "#000" : "#fff")};
        cursor: pointer;
    }
    & .user__color{
        color: #fca103;
    }
    & .white{
        color: ${((props: any) => props.changeHeader ? "#000" : "#fff")};;
    }
    & .charge {
        background-color: #fca103;
        color: #fff;
        padding:0 5px;
        margin-left:10px;
        border-radius: 5px;
    }
    & .point {
        color: #fca103;
    }
`