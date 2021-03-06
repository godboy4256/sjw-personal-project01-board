import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import BuyComment from "../../buyComment";
import { useState } from "react";
import Payment from "../../../src/components/commons/payment";
import {
    DetailBuyContainer,
    DetailBuyWrapper,
    DatailLeft,
    DatailRight,
    DetailTop,
    DetailControl,
    BuyBtn
} from "../component/styles";
import { IMutation, IMutationCreatePointTransactionOfBuyingAndSellingArgs } from "../../../src/commons/types/generated/types";



const FETCH_BOARD_ITEM = gql`
    query fetchUseditem($useditemId:ID!){
        fetchUseditem(useditemId:$useditemId){
            _id
            name
            price
            contents
            remarks
            images
            seller{
                _id
                name
                picture
            }
        }
    }
`

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;

const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId:ID!){
        deleteUseditem(useditemId:$useditemId)
    }
`

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

const DetailPage = () => {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD_ITEM, {
        variables: {
            useditemId: router?.query?.detail
        }
    })

    const { data: userId } = useQuery(FETCH_USER_LOGGED_IN)
    const [deleteUsedItem] = useMutation(DELETE_USED_ITEM)
    const [onPay, setOnPay] = useState(false)
    const onClickDeleteItem = async () => {
        try {
            const result = await deleteUsedItem({
                variables: {
                    useditemId: router?.query?.detail
                }
            })
            Modal.success({ content: "?????? ??????" });
            router.push('/market')
        } catch (error) {
            Modal.error({ content: error.message });
        }
    }

    const onClickEditItem = () => {
        if (data?.fetchUseditem?.seller._id !== userId?.fetchUserLoggedIn?._id) {
            Modal.error({ content: "?????? ????????? ?????? ?????? ???????????????." })
            return;
        } else {
            router.push({
                pathname: '/sellPage',
                query: {
                    edit: true,
                    itemId: router?.query?.detail
                }
            })
        }
    }

    const onClickList = () => {
        router.push('/market')
    }


    const onPaySystem = () => {
        setOnPay(prev => !prev)
    }

    const [createPointTransactionOfBuyingAndSelling] = useMutation<
        Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
        IMutationCreatePointTransactionOfBuyingAndSellingArgs
    >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

    const onClickBuyItem = (_id: string) => async () => {
        try {
            await createPointTransactionOfBuyingAndSelling({
                variables: {
                    useritemId: _id,
                },
            });
            alert("????????? ?????????????????????.");
            window.location.reload()
        } catch (error) {
            if (error instanceof Error) alert("????????? ?????????????????????.");
        }
    };

    const [itemInfo, setItemInfo] = useState({
        _id: data?.fetchUseditem._id || "",
        name: data?.fetchUseditem.name || "",
        remarks: data?.fetchUseditem.remarks || "",
        contents: data?.fetchUseditem.contents || "",
        price: data?.fetchUseditem.price || 0,
        pickedCount: data?.fetchUseditem.pickedCount || 0,
    });
    return (
        <DetailBuyContainer>
            <DetailBuyWrapper>
                <DetailTop>
                    <DatailLeft>
                        <ul>
                            {
                                data?.fetchUseditem?.images.filter(item => item).length > 0 ?
                                    data?.fetchUseditem?.images.filter(item => item).map((el, index) => {
                                        return <li key={uuidv4()}>
                                            {el !== ""
                                                && el.includes("file-storage")
                                                && (el.includes('jpg') || el.includes('png') || el.includes('jpeg'))
                                                && <img src={`https://storage.googleapis.com/${el}`} alt={el.name + String(index)} />}
                                        </li>
                                    }) : <li>
                                        <img src="/images/detail/gm_noimage.png" alt="?????? ????????? ???????????? ????????????." />
                                    </li>
                            }
                        </ul>
                        {
                            onPay &&
                            <Payment
                                sellName={data?.fetchUseditem?.name}
                                sellPrice={data?.fetchUseditem?.price}
                                buyName={userId?.fetchUserLoggedIn?._id}
                                setOnPay={setOnPay}
                            />
                        }
                    </DatailLeft>
                    <DatailRight>
                        <h2>{data?.fetchUseditem?.name}</h2>
                        <div className="price">
                            <h3>?????? ??????</h3>
                            <span>{data?.fetchUseditem?.price}</span> ???
                        </div>
                        <div className="contents">
                            <h3>?????? ??????</h3>
                            <div>{data?.fetchUseditem?.contents}</div>
                        </div>
                        <div className="remarks">
                            <h3>??????</h3>
                            <div>{data?.fetchUseditem?.remarks}</div>
                        </div>
                        <div className="seller__name"><span>{data?.fetchUseditem?.seller?.name}</span> ?????? ???????????? ???????????????.</div>
                        <DetailControl>
                            <div>
                                <button onClick={onClickEditItem}>?????? ????????????</button>
                                <button onClick={onClickDeleteItem}>?????? ????????????</button>
                                <button onClick={onClickList}>?????? ????????????</button>
                            </div>
                            <div className="ref__text">* ?????? ???????????? ????????? ??? ????????? ????????? ??????/?????? ??? ??? ????????????.</div>
                        </DetailControl>
                        {/* <BuyBtn onClick={onPaySystem}>$ {data?.fetchUseditem?.price}?????? ????????????</BuyBtn> */}
                        <BuyBtn onClick={onClickBuyItem(router?.query?.detail)}>$ {data?.fetchUseditem?.price}?????? ????????????</BuyBtn>
                    </DatailRight>
                </DetailTop>
                <BuyComment itemId={router?.query?.detail} />
            </DetailBuyWrapper>
        </DetailBuyContainer>

    );
};

export default DetailPage;