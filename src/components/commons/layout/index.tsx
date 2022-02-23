import LayoutBannerContainer from "./banner/LayoutBanner.container";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import LayoutFooterContainer from "./footer/LayoutFooter.container";

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter()
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
    </>
  );
}
