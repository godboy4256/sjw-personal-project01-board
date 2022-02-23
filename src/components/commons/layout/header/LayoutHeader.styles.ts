import styled from '@emotion/styled'


export const LayoutHeaderStyles = styled.header`
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    top:0;
    left:0;
    z-index: 1;
    transition: .4s;
    & > div{
        width: 100%;
        display: flex;
        align-items: center;
    }
    padding: ${(props: any) => props.changeHeader ? "5px 30px" : "10px 30px"};
    background-color: ${(props: any) => props.changeHeader ? "#fff" : "none"};
    border-bottom: ${(props: any) => props.changeHeader ? "1px solid #fca103;" : "1px solid #fff;"};
`
