import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IQuery, IQueryFetchBoardArgs, IQueryFetchBoardsCountArgs } from "../../src/commons/types/generated/types";
import { MouseEvent } from 'recat'

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
    const router = useRouter()
    const [startPage, setStartPage] = useState(1);
    const [activedPage, setActivedPage] = useState(1);
    // const lastPage = count ? Math.ceil(count / 10) : 0;
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        setActivedPage(1);
    }, [keyword]);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardArgs
    >(FETCH_USED_ITEMS);

    // const { data: count, refetch: refetchBoardsCount } = useQuery<
    //     Pick<IQuery, "fetchBoardsCount">,
    //     IQueryFetchBoardsCountArgs
    // >(FETCH_BOARDS_COUNT);

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

    // const onClickPrevPage = () => {
    //     if (startPage <= 1) return;
    //     setStartPage((prev) => prev - 10);
    //     refetch({ page: startPage });
    //     setActivedPage(startPage - 10);
    // };

    // const onClickNextPage = () => {
    //     if (startPage + 10 > lastPage) return;
    //     setStartPage((prev) => prev + 10);
    //     refetch({ page: startPage });
    //     setActivedPage(startPage + 10);
    // };

    return (
        <div style={{ paddingTop: "300px" }}>
            <ul>
                {
                    data?.fetchUseditems?.map(el => {
                        return <li key={uuidv4()}>
                            <div>판매 물품 : {el.name}</div>
                            <div>판매자 : {el.seller.name}</div>
                            <div>가격 : {el.price}</div>
                            <div>
                            </div>
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
                            <button onClick={goBuy(el._id)}>구매하기</button>
                            <hr />
                        </li>
                    })
                }
            </ul>
            <ul>
                {/* <li onClick={onClickPrevPage}>{`<<`}</li> */}
                {new Array(10).fill(1).map(
                    (_, index) =>
                    (
                        <li
                            key={uuidv4()}
                            onClick={onClickPage}
                            id={String(index + startPage)}
                        //  isActive={startPage + index === activedPage}
                        >
                            {index + startPage}
                        </li>
                    )
                )}
                {/* <li onClick={onClickNextPage}>{`>>`}</li> */}
            </ul>
            <button onClick={goSellPage}>상품 판매하기</button>
        </div>
    );
};

export default Market;