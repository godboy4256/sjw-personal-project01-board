import {
    SectionContentsList,
    ListImage,
    ListContents
} from "../Setion01.styles";

const Section01ContentsList = ({
    title,
    contents,
    imgUrl,
    imgAlt
}) => {
    return (
        <SectionContentsList>
            <ListImage>
                <img src={imgUrl} alt={imgAlt} />
            </ListImage>
            <ListContents>
                <h3>{title}</h3>
                <p>
                    {contents}
                </p>
            </ListContents>
        </SectionContentsList>
    );
};

export default Section01ContentsList;