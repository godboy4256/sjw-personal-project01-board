import {
    SectionMiddleContainer,
    SectionMiddleWrapper,
    SectionMiddleContents
} from "./Setion02.styles";
import dummy from "./common/list.json"
import { v4 as uuidv4 } from "uuid";
import Section02ContentsList from "./component/Section02.Contents.List";

const Setion02 = () => {

    return (
        <SectionMiddleContainer>
            <SectionMiddleWrapper>
                <SectionMiddleContents>
                    {
                        dummy.map(el => {
                            return <Section02ContentsList
                                key={uuidv4()}
                                title={el.title}
                                contents={el.contents}
                                imgUrl={el.imgUrl}
                                imgAlt={el.imgAlt}
                                direction={el.direction}
                            />
                        })
                    }
                </SectionMiddleContents>
            </SectionMiddleWrapper>
        </SectionMiddleContainer>
    );
};

export default Setion02;