import { useRouter } from "next/router";
import LayoutSideMenuUI from "./LayoutSideMenu.presenter";

export default function LayoutSideMenu({ changeHeader }) {
  const router = useRouter()

  const onClickHome = () => router.push('/')
  const onClickBoard = () => router.push('/board')
  const onClickZoo = () => router.push('/zoos')
  const onClickMarket = () => router.push('/market')

  return (
    <LayoutSideMenuUI
      onClickHome={onClickHome}
      onClickBoard={onClickBoard}
      onClickMarket={onClickMarket}
      onClickZoo={onClickZoo}
      changeHeader={changeHeader}
    />
  )
}
