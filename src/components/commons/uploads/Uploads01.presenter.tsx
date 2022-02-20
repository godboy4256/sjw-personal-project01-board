import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons"
import {
  UploadButton,
  UploadFileHidden,
  UploadImage
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";




export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <span>+</span>
          <FontAwesomeIcon icon={faImage} />
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
