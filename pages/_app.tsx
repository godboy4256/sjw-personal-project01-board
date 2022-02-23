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

const firebaseConfig = {
  apiKey: "AIzaSyDkKksE3jmPd6mQxsfpLTtJ8sNX57cSxUs",
  authDomain: "mysite1234-9ba99.firebaseapp.com",
  projectId: "mysite1234-9ba99",
  storageBucket: "mysite1234-9ba99.appspot.com",
  messagingSenderId: "486288941499",
  appId: "1:486288941499:web:e45ae91f62e2141abea49e",
};


import { createContext, useEffect, useState } from "react";
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
  const [userId, setUserId] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken"))
    }
  }, [])

  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo
  };

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
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
