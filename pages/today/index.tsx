
// const FETCH_USED_ITEMS = gql`
//     query fetchUseditems($page:Int){
//         fetchUseditems(page:$page){
//             _id
//             name
//             price
//             contents
//             remarks
//             images
//             seller{
//                 name
//                 picture
//             }
//         }
// }
// `

const Today = () => {
    // const { data } = useMutation(FETCH_USED_ITEMS)
    // const todayFetch = data?.fetchUseditems?.filter()
    return (
        <div>
            <h3>오늘 본 상품</h3>
        </div>
    );
};

export default Today;