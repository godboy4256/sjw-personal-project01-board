import { useRouter } from "next/router";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../_app";
import { v4 as uuidv4 } from "uuid";
import { IQuery, IQueryFetchBoardArgs } from "../../src/commons/types/generated/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { gql, useQuery } from "@apollo/client";

import {
    MarketItemList,
    MarketItem,
    MarketPagination,
    MarketWrapper,
    MarketImageBox,
    MarketInfo,
    PageColor,
    GoSellPageButton
} from "../styles";


const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId:ID!){
        fetchUseditem(useditemId:$useditemId){
            name
            _id
            price
            contents
            images
            seller{name}
        }
    }
`

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


const MarketList = () => {
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        setActivedPage(1);
    }, [keyword]);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardArgs
    >(FETCH_USED_ITEMS);
    const [todaySeaList, setTodaySeaList] = useState([])
    const { todaylist, setTodayList } = useContext(GlobalContext)
    const router = useRouter()
    const [startPage, setStartPage] = useState(1);
    const [activedPage, setActivedPage] = useState(1);
    const goSellPage = () => {
        router.push('/sellPage')
    }

    const goBuy = (id: string, name, price, images) => (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/detailbuy/${id}`)
        const addTodayItem = {
            id,
            name,
            price,
            images
        }
        localStorage.setItem("today", addTodayItem)
    };

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        if (!(event.target instanceof Element)) return;
        const activedPage = Number(event.target.id);
        setActivedPage(activedPage);
        refetch({ page: activedPage });
    };
    return (
        <MarketWrapper>
            <h2>상품 리스트</h2>
            <GoSellPageButton onClick={goSellPage}>나의 상품 판매하기</GoSellPageButton>
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
                                <button onClick={goBuy(el._id, el.name, el.price, el.images)}>
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
        </MarketWrapper>
    );
};

export default MarketList