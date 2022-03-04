import { SideMenuContainer, SideMenuList } from "./LayoutSideMenu.styles";

export default function LayoutSideMenuUI({
  onClickHome,
  onClickBoard,
  onClickMarket,
  changeHeader,
  onClickZoo
}) {
  return (
    <SideMenuContainer changeHeader={changeHeader}>
      <SideMenuList onClick={onClickHome}>Home</SideMenuList>
      <SideMenuList onClick={onClickBoard}>Board</SideMenuList>
      <SideMenuList onClick={onClickZoo}>Zoos</SideMenuList>
      <SideMenuList onClick={onClickMarket}>Market</SideMenuList>
    </SideMenuContainer>
  );
}
