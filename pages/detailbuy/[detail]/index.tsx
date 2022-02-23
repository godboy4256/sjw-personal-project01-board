import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

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
                name
                picture
            }
        }
    }
`

const DetailPage = () => {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD_ITEM, {
        variables: {
            useditemId: router?.query?.detail
        }
    })

    return (
        <div>
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
                <button>상품 수정하기</button>
                <button>상품 삭제하기</button>
                <button>상품 목록으로</button>
            </ul>
            <button>구입하기</button>
        </div>
    );
};

export default DetailPage;