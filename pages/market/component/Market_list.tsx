import { useRouter } from "next/router";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../_app";
import { v4 as uuidv4 } from "uuid";
import { IQuery, IQueryFetchBoardArgs } from "../../src/commons/types/generated/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { gql, useMutation, useQuery } from "@apollo/client";

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
import { Modal } from "antd";

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

const FETCH_USEDITEMS_IPICKED = gql`
    query fetchUseditemsIPicked($search: String, $page: Int) {
        fetchUseditemsIPicked(search: $search, page: $page) {
        _id
        name
        price
        seller{name}
        images
        }
    }
`;

const TOGGLE_USED_ITEM_PICK = gql`
   mutation toggleUseditemPick($useditemId:ID!) {
    toggleUseditemPick(useditemId:$useditemId)
   }
`



const MarketList = () => {
    const [todaySeaList, setTodaySeaList] = useState([])
    useEffect(() => {
        if (localStorage.getItem("today")) {
            setTodaySeaList(JSON.parse(localStorage.getItem("today")))
        } else {
            localStorage.setItem("today", JSON.stringify(todaySeaList))
        }
    }, [])
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        setActivedPage(1);
    }, [keyword]);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardArgs
    >(FETCH_USED_ITEMS);
    const { todaylist, setTodayList } = useContext(GlobalContext)
    const router = useRouter()
    const [startPage, setStartPage] = useState(1);
    const [activedPage, setActivedPage] = useState(1);
    const goSellPage = () => {
        router.push('/sellPage')
    }

    const goBuy = (id: string, name, price, images, seller) => (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/detailbuy/${id}`)
        const addTodayItem = {
            id,
            name,
            price,
            images,
            seller
        }
        const todayStorageData = [...todaySeaList, addTodayItem]
        localStorage.setItem("today", JSON.stringify(todayStorageData))
    };

    const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK)
    const PickItem = (id: string) => async (event: MouseEvent<HTMLDivElement>) => {
        const result = await toggleUseditemPick({
            variables: {
                useditemId: id
            }
        })
        Modal.success({
            content: "상품을 찜 했습니다."
        })
        window.location.reload()
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
                                <button onClick={goBuy(el._id, el.name, el.price, el.images, el.seller.name)}>
                                    <span>
                                        사러가기
                                    </span>
                                    <span className="arrow-icon">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                                <h4><span>{el.seller.name ? el.seller.name : "익명"}</span> 님이 판매하고 있는 상품입니다.</h4>
                                <button onClick={PickItem(el._id)}>찜하기</button>
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