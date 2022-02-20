import {
  Page,
  PageContainer,
  NextButton,
  PrevButton
} from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";



export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <PageContainer>
      <PrevButton onClick={props.onClickPrevPage}>{`<<`}</PrevButton>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <NextButton onClick={props.onClickNextPage}>{`>>`}</NextButton>
    </PageContainer>
  );
}
