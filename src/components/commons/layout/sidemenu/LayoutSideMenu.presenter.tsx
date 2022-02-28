import { SideMenuContainer, SideMenuList } from "./LayoutSideMenu.styles";

export default function LayoutSideMenuUI({
  onClickHome,
  onClickBoard,
  onClickAbout,
  onClickMarket,
  changeHeader
}) {
  return (
    <SideMenuContainer changeHeader={changeHeader}>
      <SideMenuList onClick={onClickHome}>Home</SideMenuList>
      <SideMenuList onClick={onClickBoard}>Board</SideMenuList>
      <SideMenuList onClick={onClickAbout}>Zoos</SideMenuList>
      <SideMenuList onClick={onClickMarket}>Market</SideMenuList>
    </SideMenuContainer>
  );
}
