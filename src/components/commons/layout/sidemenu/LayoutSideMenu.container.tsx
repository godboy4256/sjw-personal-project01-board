import { useRouter } from "next/router";
import LayoutSideMenuUI from "./LayoutSideMenu.presenter";

export default function LayoutSideMenu() {
  const router = useRouter()

  const onClickHome = () => router.push('/')
  const onClickBoard = () => router.push('/board')
  const onClickWrite = () => router.push('/write')
  const onClickOpenApi = () => router.push('/openapi')

  return (
    <LayoutSideMenuUI
      onClickHome={onClickHome}
      onClickBoard={onClickBoard}
      onClickWrite={onClickWrite}
      onClickOpenApi={onClickOpenApi}
    />
  )
}
