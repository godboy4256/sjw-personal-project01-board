import Paginations01 from "../../../commons/paginations/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import {
  BoardListContainerStyles,
  BoardListTitleStyles,
  BoardListStyles,
  BoardListWriterStyles,
  IndiCator,
  BoardListUuTtileList
} from './BoardList.styles'
import { useRouter } from "next/router";

export default function BoardListUI(props: IBoardListUIProps) {
  const router = useRouter()
  return (
    <BoardListContainerStyles>
      <Searchbars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <BoardListUuTtileList>
        {props.data?.fetchBoards.map((el) => (
          <BoardListStyles key={el._id} onClick={() => { router.push(`/boards/${el._id}`) }}>
            <BoardListTitleStyles id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <span key={uuidv4()}>
                    {el}
                  </span>
                ))}
            </BoardListTitleStyles>
            <BoardListWriterStyles>
              <span>
                {el.writer}
              </span>
              님이 작성하였습니다.
            </BoardListWriterStyles>
          </ BoardListStyles>
        ))
        }
      </BoardListUuTtileList>
      <IndiCator>
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          isRefreshed={props.keyword}
        />
      </IndiCator>
    </BoardListContainerStyles>
  );
}
