import { useRouter } from "next/router";
import LayoutSideMenuUI from "./LayoutSideMenu.presenter";

export default function LayoutSideMenu({ changeHeader }) {
  const router = useRouter()

  const onClickHome = () => router.push('/')
  const onClickBoard = () => router.push('/board')
  const onClickWrite = () => router.push('/write')
  const onClickWorldCup = () => router.push('/worldcup')
  const onClickMarket = () => router.push('/market')

  return (
    <LayoutSideMenuUI
      onClickHome={onClickHome}
      onClickBoard={onClickBoard}
      onClickWrite={onClickWrite}
      onClickWorldCup={onClickWorldCup}
      onClickMarket={onClickMarket}
      changeHeader={changeHeader}
    />
  )
}
