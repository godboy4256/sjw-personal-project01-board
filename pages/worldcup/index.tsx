import { useEffect, useState } from "react";
import {
    FlexBox,
    WorldCupContainer,
    WorldCupHeader
} from "./common/styles";

const items = [
    {
        name: "고릴라",
        src: "images/main/img01.jpg"
    },
    {
        name: "호랑이",
        src: "images/main/img02.jpg"
    },
    {
        name: "북극곰",
        src: "images/main/img03.jpg"
    },
    {
        name: "판다",
        src: "images/main/img04.jpg"
    },
    {
        name: "기린",
        src: "images/main/img05.jpg"
    },
    {
        name: "레서판다",
        src: "images/main/img06.jpg"
    },
    {
        name: "코끼리",
        src: "images/main/slide01.jpg"
    },
    {
        name: "사자",
        src: "images/main/slide03.jpg"
    }
];


const WorldCupPage = () => {
    const [foods, setFoods] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [worldCupstate, setWorldCupstate] = useState(items.length);
    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setFoods(items);
        setDisplays([items[0], items[1]]);
    }, []);

    const clickHandler = (animal: any) => () => {
        if (foods.length <= 2) {
            if (winners.length === 0) {
                setDisplays([animal]);
            } else {
                let updatedFood = [...winners, animal];
                setFoods(updatedFood);
                setWorldCupstate(updatedFood.length)
                setDisplays([updatedFood[0], updatedFood[1]]);
                setWinners([]);
            }
        } else if (foods.length > 2) {
            setWinners([...winners, animal]);
            setDisplays([foods[2], foods[3]]);
            setFoods(foods.slice(2));
        }
    };

    return (
        <>
            <WorldCupHeader>
                <h3>이상형 월드컵</h3>
                <div></div>
            </WorldCupHeader>
            <WorldCupContainer>
                <h2>
                    {

                        worldCupstate === 2 ? "결승" :
                            worldCupstate > 2 && worldCupstate + "강"

                    }
                </h2>
                {
                    displays.length === 1 && <div>"우승을 축하합니다!"</div>
                }
                <FlexBox>
                    {displays.map(el => {
                        return (
                            <div className="flex-1" key={el.name} onClick={clickHandler(el)}>
                                <div className="name">{el.name}</div>
                                <img className="animal-img" src={el && el?.src} />
                            </div>
                        );
                    })}
                </FlexBox>
            </WorldCupContainer>
        </>
    );
};

export default WorldCupPage;