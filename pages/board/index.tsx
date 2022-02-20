import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScrollContainer from "../../src/components/commons/infiniteScroll/InfiniteScroll.container";
import BoardList from "../../src/components/units/board/list/BoardList.container";
import {
    BoardLayoutContainer,
    BoardSetting,
    BoardTypeChangeButton,
    BoardAddButton
} from "./common/Board.styles";

const Boards = () => {
    const router = useRouter()
    const [boardType, setBoardType] = useState(false)
    const onChangeBoardType = () => [
        setBoardType(prev => !prev)
    ]
    function onClickMoveToBoardNew() {
        router.push("/boards/new");
    }
    return (
        <BoardLayoutContainer>
            <BoardSetting>
                <BoardTypeChangeButton onClick={onChangeBoardType}>
                    {
                        boardType ?
                            "글이 계속 나왔으면 좋겠어요." :
                            "자유 게시판 형식으로 볼래요."
                    }
                </BoardTypeChangeButton>
                <BoardAddButton onClick={onClickMoveToBoardNew}>
                    <img src="/images/board/list/write.png" />
                    게시물 등록하기
                </BoardAddButton>
            </BoardSetting>
            {
                boardType ? <BoardList /> : <InfiniteScrollContainer />
            }
        </BoardLayoutContainer>
    );
};

export default Boards;