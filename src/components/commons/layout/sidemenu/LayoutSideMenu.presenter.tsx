export default function LayoutSideMenuUI({
  onClickHome,
  onClickBoard,
  onClickWrite,
  onClickOpenApi
}) {
  return (
    <ul>
      <li onClick={onClickHome}>홈으로</li>
      <li onClick={onClickBoard}>자유 게시판</li>
      <li onClick={onClickWrite}>글 작성하기</li>
      <li onClick={onClickOpenApi}>오픈 API</li>
    </ul>
  );
}
