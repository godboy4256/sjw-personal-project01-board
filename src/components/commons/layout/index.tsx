import LayoutBannerContainer from "./banner/LayoutBanner.container";
import { ReactNode, useContext } from "react";
import { useRouter } from "next/router";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutFooterContainer from "./footer/LayoutFooter.container";
import { GlobalContext } from "../../../../pages/_app";
import Today from "../../../../pages/today";

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  const { viewToday } = useContext(GlobalContext)
  return (
    <>
      {
        router.asPath !== '/login' &&
        <LayoutHeaderContainer />
      }
      {
        router.asPath === '/' &&
        <LayoutBannerContainer />
      }
      <div>{props.children}</div>
      {
        router.asPath !== '/login' &&
        <LayoutFooterContainer />
      }
      {
        viewToday && <Today />
      }
    </>
  );
}
