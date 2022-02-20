import styled from "@emotion/styled";

export const SectionContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 100px 0 200px;
`

export const SectionWrapper = styled.section`
    max-width:1100px;
    width: 100%;
    display: flex;
`

export const SectionTitle = styled.h2`
    text-align:center;
    font-size: 50px;
`

export const SectionContents = styled.ul`
   display:flex;
   flex-wrap:wrap;
`

export const SectionContentsList = styled.li`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items:center ;
    padding: 30px;
`

export const ListImage = styled.div`
    width: 50%;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`

export const ListContents = styled.div`
    width: 50%;
    padding-left: 20px;
    & > h3 {
        font-size: 35px;
    }
`