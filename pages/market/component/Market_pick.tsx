import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsIPickedArgs } from "../../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";
import {
    MarketItemList,
    MarketItem,
    MarketWrapper,
    MarketImageBox,
    MarketInfo
} from "../styles";
import { useRouter } from "next/router";
import { Modal } from "antd";


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
   mutation toggleUseditemPick($useditemId:ID!){
        toggleUseditemPick(useditemId:$useditemId)
   }
`

const MarketPick = () => {
    const router = useRouter()
    const { data: picked } = useQuery<
        Pick<IQuery, "fetchUseditemsIPicked">,
        IQueryFetchUseditemsIPickedArgs
    >(FETCH_USEDITEMS_IPICKED, {
        variables: {
            search: ""
        }
    });


    const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK)
    const PickItem = (id: string) => async () => {
        try {
            await toggleUseditemPick({
                variables: {
                    useditemId: id
                },
                refetchQueries: [FETCH_USEDITEMS_IPICKED]
            })
            Modal.success({
                content: "찜취소."
            })
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    };

    const goBuy = (id: string) => () => {
        router.push(`/detailbuy/${id}`)
    };

    return (
        <MarketWrapper>
            <h2>찜한 상품 목록</h2>
            <MarketItemList>
                {
                    picked && picked?.fetchUseditemsIPicked?.map(el => {
                        console.log(el)
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
                                <button onClick={goBuy(el._id, el.name, el.price, el.images, el.seller.name)}>
                                    <span>
                                        사러가기
                                    </span>
                                </button>
                                <button onClick={PickItem(el._id)}>찜 취소</button>
                                <br />
                                <h4><span>{el.seller.name ? el.seller.name : "익명"}</span> 님이 판매하고 있는 상품입니다.</h4>
                            </MarketInfo>
                        </MarketItem>
                    })
                }
            </MarketItemList>

        </MarketWrapper>
    )
}

export default MarketPick;