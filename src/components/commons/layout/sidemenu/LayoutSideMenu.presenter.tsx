import { SideMenuContainer, SideMenuList } from "./LayoutSideMenu.styles";

export default function LayoutSideMenuUI({
  onClickHome,
  onClickBoard,
  onClickWrite,
  onClickOpenApi,
  changeHeader
}) {
  return (
    <SideMenuContainer changeHeader={changeHeader}>
      <SideMenuList onClick={onClickHome}>Home</SideMenuList>
      <SideMenuList onClick={onClickBoard}>Board</SideMenuList>
      <SideMenuList onClick={onClickWrite}>Write</SideMenuList>
      <SideMenuList onClick={onClickOpenApi}>Video</SideMenuList>
    </SideMenuContainer>
  );
}
