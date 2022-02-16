import { useState } from "react";
import InfiniteScrollContainer from "../../src/components/commons/infiniteScroll/InfiniteScroll.container";
import BoardList from "../../src/components/units/board/list/BoardList.container";

const Boards = () => {
    const [boardType, setBoardType] = useState(false)
    const onChangeBoardType = () => [
        setBoardType(prev => !prev)
    ]
    return (
        <div>
            <div>
                <button onClick={onChangeBoardType}>
                    {
                        boardType ?
                            "무한 스크롤" :
                            "페이지 네이션"
                    }
                </button>
            </div>
            {
                boardType ? <BoardList /> : <InfiniteScrollContainer />
            }
        </div>
    );
};

export default Boards;