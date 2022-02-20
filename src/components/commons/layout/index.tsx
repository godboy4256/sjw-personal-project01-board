import LayoutBannerContainer from "./banner/LayoutBanner.container";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutFooterContainer from "./footer/LayoutFooter.container";
// import LayoutMainContainer from "./main/LayoutMain.container";

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter()
  return (
    <>
      <LayoutHeaderContainer />
      {
        router.asPath === '/' &&
        <LayoutBannerContainer />
      }
      <div>{props.children}</div>
      {/* {
        router.asPath === '/' &&
        <LayoutMainContainer />
      } */}
      <LayoutFooterContainer />
    </>
  );
}
