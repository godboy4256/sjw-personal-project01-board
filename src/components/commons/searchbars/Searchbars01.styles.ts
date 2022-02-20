import styled from "@emotion/styled";

export const SearchBarStylesContainer = styled.div`
    
`

export const SearchBarStyles = styled.input`
    width: 50%;
    border:none;
    background: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    padding:10px;
    transition: .4s;
    margin-left: 5px;
    &:focus{
        background-color: #f0f0f0;
    }

`