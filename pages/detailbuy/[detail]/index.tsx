import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import BuyComment from "../../buyComment";


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
    }
  }
`;

const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId:ID!){
        deleteUseditem(useditemId:$useditemId)
    }
`

const DetailPage = () => {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD_ITEM, {
        variables: {
            useditemId: router?.query?.detail
        }
    })

    const { data: userId } = useQuery(FETCH_USER_LOGGED_IN)
    const [deleteUsedItem] = useMutation(DELETE_USED_ITEM)
    const onClickDeleteItem = async () => {
        try {
            const result = await deleteUsedItem({
                variables: {
                    useditemId: router?.query?.detail
                }
            })
            Modal.success({ content: "삭제 완료" });
            router.push('/market')
        } catch (error) {
            Modal.error({ content: error.message });
        }
    }

    const onClickEditItem = () => {
        if (data?.fetchUseditem?.seller._id !== userId?.fetchUserLoggedIn?._id) {
            Modal.error({ content: "수정 권한이 있는 없는 상품입니다." })
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

    return (
        <div style={{ paddingTop: "500px" }}>
            <h2>{data?.fetchUseditem?.name}</h2>
            <div>{data?.fetchUseditem?.price}</div>
            <div>{data?.fetchUseditem?.contents}</div>
            <div>{data?.fetchUseditem?.remarks}</div>
            <div>{data?.fetchUseditem?.seller?.name}</div>
            <ul>
                {
                    data?.fetchUseditem?.images.map((el, index) => {
                        return <li key={uuidv4()}>
                            {el !== ""
                                && el.includes("file-storage")
                                && (el.includes('jpg') || el.includes('png') || el.includes('jpeg'))
                                && <img src={`https://storage.googleapis.com/${el}`} alt={el.name + String(index)} />}
                        </li>
                    })
                }
            </ul>
            <ul>
                <button onClick={onClickEditItem}>상품 수정하기</button>
                <button onClick={onClickDeleteItem}>상품 삭제하기</button>
                <button onClick={onClickList}>상품 목록으로</button>
            </ul>
            <button>구입하기</button>
            <BuyComment itemId={router?.query?.detail} />
        </div>
    );
};

export default DetailPage;