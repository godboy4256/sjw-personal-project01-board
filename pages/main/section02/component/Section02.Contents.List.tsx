import {
    SectionContentsList02,
    ListImage02,
    ListContents02
} from "../Setion02.styles";

const Section02ContentsList = ({
    title,
    contents,
    imgUrl,
    imgAlt,
    direction
}) => {
    console.log(direction)
    return (
        <SectionContentsList02 direction={direction}>
            <ListImage02>
                <img src={imgUrl} alt={imgAlt} />
            </ListImage02>
            <ListContents02>
                <h3>{title}</h3>
                <p>
                    {contents}
                </p>
                <button>Go Board</button>
            </ListContents02>
        </SectionContentsList02>
    );
};

export default Section02ContentsList;