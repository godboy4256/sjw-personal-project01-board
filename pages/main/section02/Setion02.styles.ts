import styled from "@emotion/styled";

export const SectionMiddleContainer = styled.section`
    width: 100%;
    background-color: #fffbc4;
    display: flex;
    justify-content: center;
`

export const SectionMiddleWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    padding: 30px;
`

export const SectionMiddleContents = styled.ul`
    width: 100%;
    transform: translateY(-100px);
`

export const SectionContentsList02 = styled.li`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:${(props: any) => props.direction === "right" ? "flex-end" : "flex-start"} ;
    text-align:${(props: any) => props.direction === "right" ? "right" : "left"};
`

export const ListImage02 = styled.div`
    width: 100%;
    max-width: 50%;
    & > img {
        width: 100%;
    }
`

export const ListContents02 = styled.div`
     & > h3{
         font-size:40px;
         line-height: 1;
     };
     & > p{
         font-size: 18px;
         margin-bottom: 30px;
     };
     & > button {
         padding:10px 23px;
         background-color: #fca103;
         color: #fff;
         font-size:18px;
         cursor: pointer;
     };
     margin:40px 0 80px
`
