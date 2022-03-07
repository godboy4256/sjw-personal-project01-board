import { useEffect, useState } from "react";
import { MarketImageBox, MarketInfo, MarketItem, MarketItemList, MarketWrapper } from "../styles";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const MarketToday = () => {
    const router = useRouter()
    const [todaySeaList, setTodyaSeaList] = useState([])
    useEffect(() => {
        setTodyaSeaList(JSON.parse(localStorage.getItem("today")))
    }, [])

    const goBuy = (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
        router.push(`/detailbuy/${id}`)
    };

    const goBuyDelete = (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
        const deleteAfterTodaySeaList = todaySeaList.filter(item => {
            return item.id !== id
        })!
        setTodyaSeaList(deleteAfterTodaySeaList)
        localStorage.setItem("today", JSON.stringify(deleteAfterTodaySeaList))
    };

    return (
        <MarketWrapper>
            <h2>오늘 본 상품</h2>
            <MarketItemList>
                {
                    todaySeaList && todaySeaList.map(el => {
                        return <MarketItem key={uuidv4()} className="full_width">
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
                                <button onClick={goBuy(el.id)}>
                                    <span>
                                        사러가기
                                    </span>
                                    <span className="arrow-icon">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                </button>
                                <button onClick={goBuyDelete(el.id)}>
                                    <span>
                                        오늘 본 상품 항목에서 삭제
                                    </span>
                                </button>
                                <h4><span>{el.seller.name ? el.seller.name : "익명"}</span> 님이 판매하고 있는 상품입니다.</h4>
                            </MarketInfo>
                        </MarketItem>
                    })
                }
            </MarketItemList>
        </MarketWrapper>
    );
};

export default MarketToday;