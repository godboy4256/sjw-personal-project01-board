import styled from '@emotion/styled'

export const LogoContainer = styled.div`
    border:${(props: any) => props.changeHeader ? "3px solie #fff" : "3px solid #fca103"};
    display: flex;
    align-items: center;
    padding: 3px 5px;
    transition:.4s ;
`

export const LogoTitle = styled.span`
    font-size: 30px;
    color:#fca103;
    font-weight: 900;
`

export const LogoIcon = styled.span`
    font-size: 40px;
    color:#fca103;
    margin-right:10px;
`


