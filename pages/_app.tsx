import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";


import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { onError } from '@apollo/client/link/error'

const firebaseConfig = {
  apiKey: "AIzaSyDkKksE3jmPd6mQxsfpLTtJ8sNX57cSxUs",
  authDomain: "mysite1234-9ba99.firebaseapp.com",
  projectId: "mysite1234-9ba99",
  storageBucket: "mysite1234-9ba99.appspot.com",
  messagingSenderId: "486288941499",
  appId: "1:486288941499:web:e45ae91f62e2141abea49e",
};


import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/components/commons/getAccessToken";
export const GlobalContext = createContext({});
export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}

function MyApp({ Component, pageProps }: AppProps) {

  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});

  const value = {
    accessToken,
    setAccessToken
  };

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, []);


  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1.에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAceessToken) => {
            setAccessToken(newAceessToken)
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAceessToken}`
              }
            })
            console.log('asdfasdf')
            return forward(operation) // 변경된 오퍼레이션 재요청하기
          })
          // 설정 변경(accessToken 만!! 바꿔치기)
        }
      }
    }
    // 2.해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
    // 3.refreshToken으로 accessToken을 재발급 받기
    // 4.재발급 받은 accessToken을 저장하기
    // 5.재발급 받은 accessToken으로 방금 실패한 쿼리 재요청
  })

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include"
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
