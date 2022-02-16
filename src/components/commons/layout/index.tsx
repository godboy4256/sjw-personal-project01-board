import LayoutBanner from "./banner/LayoutBanner.container";
import { ReactNode } from "react";
import LayoutSideMenu from "./sidemenu/LayoutSideMenu.container";

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutSideMenu />
      {/* <LayoutBanner /> */}
      <div>{props.children}</div>
    </>
  );
}
