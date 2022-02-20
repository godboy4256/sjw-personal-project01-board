import styled from '@emotion/styled';

export const SideMenuContainer = styled.ul`
    display: flex;
    padding: 5px 0;
    width: 100%;
    justify-content: space-evenly;
    color: ${((props: any) => props.changeHeader ? "#000" : "#fff")};
    transition: .4s;
`
export const SideMenuList = styled.li`
    cursor: pointer;
    font-size: 20px;
    padding: 0 10px;
    transition: .4s;
`