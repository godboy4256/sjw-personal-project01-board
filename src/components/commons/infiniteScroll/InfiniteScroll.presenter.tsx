import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_BOARDS = gql`
query fetchBoards($page: Int) {
  fetchBoards(page: $page) {
    _id
    writer
    title
  }
}
`;

const InfiniteScrollPresenter = () => {
    const { data, fetchMore } = useQuery(FETCH_BOARDS, {
        variables: { page: 1 }
    });
    const router = useRouter()

    const onLoadMore = () => {
        if (!data) return;
        fetchMore({
            variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult.fetchBoards)
                    return { fetchBoards: [...prev?.fetchBoards] };
                return {
                    fetchBoards: [...prev?.fetchBoards, ...fetchMoreResult?.fetchBoards],
                };
            }
        });
        console.log(data)
    };

    const goDetail = (event) => {
        router.push(`/boards/${event?.currentTarget?.id}`)
    }

    return (
        <InfiniteScroll loadMore={onLoadMore} hasMore={true} pageStart={1}>
            <>
                {data?.fetchBoards?.map((el: any) => (
                    <div key={el._id} id={el._id} onClick={goDetail}>
                        <span>
                            {el.title} {el.writer}
                        </span>
                    </div>
                ))}
            </>
        </InfiniteScroll>

    )
}

export default InfiniteScrollPresenter;