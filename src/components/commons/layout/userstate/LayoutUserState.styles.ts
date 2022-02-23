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
`