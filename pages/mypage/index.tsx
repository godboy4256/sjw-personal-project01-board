import PurchaseItem from "../../src/commons/purchaseItem/index";
import { useContext } from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { GlobalContext } from "../_app";

const Label = styled.div`
  font-size: 20px;
  & > span{
    color: #fca103;
  }
  & .margin{
    margin-top: 50px;
  }
`;

const Titlelabel = styled.div`
  font-size: 35px;
  margin: 50px;
  font-weight: bold;
  text-align: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  margin: 200px auto;
  background-color: #fff;
  & h2 > span{
    color: #fca103;
    font-weight: 900;
  };
  & div > span{
    color: #fca103;
    font-weight: 900;
  };
  & label.contents__start {
    margin-top: 50px;
  };
  & label.contents__start.point{
    margin-top: 20px;
  }
  & label.contents__start > span {
    color: #fca103;
  }
`;


const BuyList = styled.div`
  font-size: 11px;
`;
const SoldList = styled.div`
  font-size: 11px;
`;

const ListWrapper = styled.div`
  border-bottom: 1px solid #fca103;
  padding: 20px;
`;

const Container = styled.div`
  padding: 50px;
  background-color: currentcolor;
`;



export interface FormValues {
  email?: string;
  password?: string;
  name: string;
}

const FETCH_USED_ITEM_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      name
      contents
      price
      _id
    }
  }
`;
const FETCH_USED_ITEM_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      name
      contents
      price
    }
  }
`;
const FETCH_POINT_TRANSACTION = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      impUid
      balance
      amount
      useditem {
        name
        price
      }
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      createdAt
      userPoint {
        amount
      }
    }
  }
`;


export default function SignInPresenter() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: soldData } = useQuery(FETCH_USED_ITEM_ISOLD, {
    variables: { page: 1, search: "" },
  });
  const { data: buyData } = useQuery(FETCH_USED_ITEM_IBOUGHT, {
    variables: { page: 1, search: "" },
  });
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTION, {
    variables: { page: 1, search: "" },
  });
  const { accessToken } = useContext(GlobalContext);
  return (
    <>
      {accessToken && (
        <Container>
          <Main>
            <Titlelabel>???????????????</Titlelabel>
            <div>
              <h2><span>{data?.fetchUserLoggedIn?.name}</span> ?????? ???????????? ?????????.</h2>
              <div>ID : {data?.fetchUserLoggedIn?.email}</div>
              <div>?????? ?????? : {data?.fetchUserLoggedIn?.createdAt.slice(0, 10)}</div>
            </div>
            <label className="contents__start"><span>{data?.fetchUserLoggedIn?.name}</span> ?????? ?????? ??????</label>
            <BuyList>
              {soldData?.fetchUseditemsISold?.map((x, INDEX) => (
                <ListWrapper key={INDEX}>
                  <div>?????? ????????? : {x.name}</div>
                  <div>?????? ?????? : {x.price}???</div>
                </ListWrapper>
              ))}
            </BuyList>
            <label className="contents__start"><span>{data?.fetchUserLoggedIn?.name}</span> ?????? ?????? ??????</label>
            <SoldList>
              {buyData?.fetchUseditemsIBought?.map((x, INDEX) => (
                <ListWrapper key={INDEX}>
                  <div>?????? ????????? : {x.name}</div>
                  <div>?????? ?????? : {x.price}???</div>
                </ListWrapper>
              ))}
            </SoldList>
            <Label>
              <div className="margin">?????? ?????????</div>
              <span>{data?.fetchUserLoggedIn?.userPoint.amount}</span>
            </Label>
            <label className="contents__start point"><span>{data?.fetchUserLoggedIn?.name}</span> ?????? ????????? ?????? ??????</label>
            <SoldList>
              {pointData?.fetchPointTransactions?.map((x, INDEX) => (
                <ListWrapper key={INDEX}>
                  <div>????????? : {x.useditem?.name || "???????????? ??????"}</div>
                  <div>
                    {x.amount > 0 ? "????????? ??????" : "????????? ?????????"} {x.amount}
                  </div>
                  <div>?????? : {x.balance}</div>
                </ListWrapper>
              ))}
            </SoldList>
            <PurchaseItem />
          </Main>
        </Container>
      )
      }
    </>
  );
}
