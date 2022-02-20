import { gql, useMutation, useQuery } from '@apollo/client';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {
    InfiniteScrollListContainer,
    InfiniteScrollList,
    InfiniteScrollTitle,
    InfiniteScrollWriter,
    InfiniteScrollListImage,
    InfiniteScrollWriterImgBox,
    InfiniteScrollContents
} from './InfiniteScroll.styles';
import { v4 as uuidv4 } from "uuid";


const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
        _id
        writer
        title
        images
        contents
    }
 }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
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
    };

    const goDetail = (event) => {
        router.push(`/boards/${event?.currentTarget?.id}`)
    }

    return (
        <InfiniteScroll loadMore={onLoadMore} hasMore={true} pageStart={1}>
            <InfiniteScrollListContainer>
                {data?.fetchBoards?.map((el: any) => {
                    return <InfiniteScrollList id={el._id} key={el._id} onClick={goDetail} >
                        <InfiniteScrollTitle>{el.title}</InfiniteScrollTitle>
                        <InfiniteScrollContents>{el.contents}</InfiniteScrollContents>
                        <InfiniteScrollWriterImgBox>
                            {
                                el?.images.map(item => {
                                    return item !== ""
                                        && item.includes("file-storage")
                                        && (item.includes('jpg') || item.includes('png') || item.includes('jpeg'))
                                        && <InfiniteScrollListImage src={`https://storage.googleapis.com/${item}`} />
                                })
                            }
                        </InfiniteScrollWriterImgBox>
                        <InfiniteScrollWriter>
                            <span>{el.writer}</span> 님이 작성하였습니다.
                        </InfiniteScrollWriter>
                    </InfiniteScrollList>
                })}
            </InfiniteScrollListContainer>
        </InfiniteScroll >
    )
}

export default InfiniteScrollPresenter;