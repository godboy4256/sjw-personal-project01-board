import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IQuery, IQueryFetchBoardArgs, IQueryFetchBoardsCountArgs } from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import {
    MarketContainer,
    MarketItemList,
    MarketItem,
    MarkerHeader,
    MarketPagination,
    MarketWrapper,
    MarketMenu,
    MarketImageBox,
    MarketInfo,
    PageColor
} from "./styles";


const FETCH_USED_ITEMS = gql`
    query fetchUseditems($page:Int){
        fetchUseditems(page:$page){
            _id
            name
            price
            contents
            remarks
            images
            seller{
                name
                picture
            }
        }
}
`

// const FETCH_BOARDS_COUNT = gql`
//   query fetchBoardsCount($search: String) {
//     fetchBoardsCount(search: $search)
//   }
// `;



const Market = () => {
    const { todaylist, setTodayList } = useContext(GlobalContext)
    const router = useRouter()
    const [startPage, setStartPage] = useState(1);
    const [activedPage, setActivedPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        setActivedPage(1);
    }, [keyword]);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardArgs
    >(FETCH_USED_ITEMS);

    const goSellPage = () => {
        router.push('/sellPage')
    }

    const goBuy = (id: string) => (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/detailbuy/${id}`)
    };

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        if (!(event.target instanceof Element)) return;
        const activedPage = Number(event.target.id);
        setActivedPage(activedPage);
        refetch({ page: activedPage });
    };

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
                <li>List</li>
                <li>Today</li>
                <li>My Buy</li>
                <li>Sell</li>
            </MarketMenu>
            <MarketWrapper>
                <h2>상품 리스트</h2>
                <MarketItemList>
                    {
                        data?.fetchUseditems?.map(el => {
                            return <MarketItem key={uuidv4()}>
                                <MarketImageBox>
                                    {
                                        el.images.length > 0 && el.images.map((it, index) => {
                                            return (
                                                it !== ""
                                                && it.includes("file-storage")
                                                && (it.includes('jpg') || it.includes('png') || it.includes('jpeg'))
                                                && <img key={uuidv4()} src={`https://storage.googleapis.com/${it}`} alt={el.name + String(index)} />
                                            )
                                        })
                                    }
                                </MarketImageBox>
                                <MarketInfo>
                                    <h3>{el.name}</h3>
                                    <div><span>{el.price}</span>$</div>
                                    <button onClick={goBuy(el._id)}>
                                        <span>
                                            사러가기
                                        </span>
                                        <span className="arrow-icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </button>
                                    <h4><span>{el.seller.name ? el.seller.name : "익명"}</span> 님이 판매하고 있는 상품입니다.</h4>
                                </MarketInfo>
                            </MarketItem>
                        })
                    }
                </MarketItemList>
                <MarketPagination>
                    {new Array(10).fill(1).map(
                        (_, index) =>
                        (
                            <PageColor
                                key={uuidv4()}
                                onClick={onClickPage}
                                id={String(index + startPage)}
                                isActive={startPage + index === activedPage}
                            >
                                {index + startPage}
                            </PageColor>
                        )
                    )}
                </MarketPagination>
                <button onClick={goSellPage}>상품 판매하기</button>
            </MarketWrapper>
        </MarketContainer >
    );
};

export default Market;