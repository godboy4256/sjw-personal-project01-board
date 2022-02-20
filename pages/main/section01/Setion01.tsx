import {
    SectionContainer,
    SectionTitle,
    SectionContents,
    SectionWrapper,
} from "./Setion01.styles";
import dummy from "./common/list.json"
import Section01ContentsList from "./component/Section01.Contents.List";
import { v4 as uuidv4 } from "uuid";

const Setion01 = () => {
    return (
        <SectionContainer>
            <SectionTitle>Our Story</SectionTitle>
            <SectionWrapper>
                <SectionContents>
                    {
                        dummy.map(el => {
                            return <Section01ContentsList
                                key={uuidv4()}
                                title={el.title}
                                contents={el.contents}
                                imgUrl={el.imgUrl}
                                imgAlt={el.imgAlt}
                            />
                        })
                    }
                </SectionContents>
            </SectionWrapper>
        </SectionContainer>
    );
};

export default Setion01;