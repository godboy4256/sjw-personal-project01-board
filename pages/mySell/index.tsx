import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
query fetchUserLoggedIn {
  fetchUserLoggedIn {
    _id
  }
}
`;



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


const MySell = () => {
    const { data: userId } = useQuery(FETCH_USER_LOGGED_IN)
    const { data: list } = useQuery(FETCH_USED_ITEMS)
    console.log(userId?.fetchUserLoggedIn?._id)
    console.log(list)
    return (
        <div>
            MySell
        </div>
    );
};

export default MySell;