import { useState } from "react";
import MarketList from "./component/Market_list";
import MarketMyBuy from "./component/Market_mybuy";
import MarketSell from "./component/Market_sell";
import MarketToday from "./component/Market_today";
import {
    MarketContainer,
    MarkerHeader,
    MarketMenu
} from "./styles";

const Market = () => {
    const [boardState, setBoardState] = useState('List')
    const onClickTarget = (event) => {
        setBoardState(event.target.innerText)
        // event.target.className = "active__menu"
    }

    return (
        <MarketContainer>
            <MarkerHeader>
                <h1>Zoo Masters</h1>
                <strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo nostrum natus possimus minus ab fuga atque qui non? Voluptas ipsum eligendi tenetur libero? Laboriosam e
                    aque quam beatae voluptatum cupiditate.
                </strong>
            </ MarkerHeader>
            <MarketMenu>
                <li className="market__menu" onClick={onClickTarget}>List</li>
                <li className="market__menu" onClick={onClickTarget}>Today</li>
                <li className="market__menu" onClick={onClickTarget}>My Buy</li>
            </MarketMenu>
            {
                boardState === 'List' && <MarketList />
            }
            {
                boardState === 'Today' && <MarketToday />
            }
            {
                boardState === 'My Buy' && <MarketMyBuy />
            }
        </MarketContainer >
    );
};

export default Market;