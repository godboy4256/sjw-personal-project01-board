import { useForm } from "react-hook-form";
import dynamic from 'next/dynamic';
import {
    SellPageContainer,
    SellPageTitle,
    SellForm,
    SellButton,
    SellImgbox,
    SellPageWrapper,
    SellControl
} from "./styles";
import { v4 as uuidv4 } from "uuid";

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
})

import 'react-quill/dist/quill.snow.css';
import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { withAuth } from "../../src/components/commons/withAuth";
import { useRouter } from "next/router";
import { Modal } from "antd";

interface FormValues {
    email?: string;
    name?: string;
    price?: string;
    remarks?: string;
}


const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput:CreateUseditemInput!){
        createUseditem(createUseditemInput:$createUseditemInput){
            _id
        }
    }
`

const UPLOAD_FILE = gql`
    mutation uploadFile($file:Upload!){
        uploadFile(file:$file){
            url
        }
    }
`
const UPDATE_USED_ITEM = gql`
    mutation updateUseditem($updateUseditemInput:UpdateUseditemInput!,$useditemId:ID!){
        updateUseditem(updateUseditemInput:$updateUseditemInput,useditemId:$useditemId){
            _id
        }
    }

`

const SellPage = () => {
    const [createUseditem] = useMutation(CREATE_USED_ITEM)
    const [updateUseditem] = useMutation(UPDATE_USED_ITEM)
    const [uploadFile] = useMutation(UPLOAD_FILE)
    const refTag = useRef()

    const [contents, setContents] = useState()
    const [images, setImages] = useState([])
    const [tags, setTags] = useState([])

    const { register, handleSubmit } = useForm();

    const handleChange = (data) => {
        setContents(data)
    }

    const onChangeFileUpload = async (event) => {
        const file = event.target.files[0]
        try {
            const result = await uploadFile({
                variables: {
                    file
                }
            })
            const newUrl = [...images, result?.data?.uploadFile?.url]
            setImages(newUrl)
        } catch (error) {
            console.log(error)
        }
    }

    const onClickTag = () => {
        const tagContents = refTag.current.value || undefined
        const newTags = [...tags, tagContents]
        setTags(newTags)
        refTag.current.value = "" || undefined
    }


    const onClickSubmit = async (data: FormValues) => {
        try {
            const result = await createUseditem({
                variables: {
                    createUseditemInput: {
                        price: Number(data.price),
                        name: data.name,
                        remarks: data.remarks,
                        contents,
                        images,
                        tags
                    }
                }
            })
            Modal.success({ content: "????????? ?????????????????????." })
            router.push(`/market`)
        } catch (error) {
            console.log(error)
        }
    };

    const onClickSubmitEdit = async (data: FormValues) => {
        try {
            const result = await updateUseditem({
                variables: {
                    useditemId: router?.query?.itemId,
                    updateUseditemInput: {
                        price: Number(data.price),
                        name: data.name,
                        remarks: data.remarks,
                        contents,
                        images,
                        tags
                    }
                }
            })
            Modal.success({ content: "?????? ????????? ?????????????????????." })
            router.push(`/detailbuy/${router?.query?.itemId}`)
        } catch (error) {
            console.log(error)
        }
    };

    const router = useRouter()
    console.log(router?.query?.edit)

    return (
        <SellPageContainer>
            <SellPageWrapper>
                <SellPageTitle>{router?.query?.edit ? "?????? ??????" : "?????? ??????"}</SellPageTitle>
                <SellForm onSubmit={router?.query?.edit ? handleSubmit(onClickSubmitEdit) : handleSubmit(onClickSubmit)}>
                    <div className="top__two">
                        <div>
                            <label>?????????</label>
                            <input type="text" {...register("name")} autoComplete="off" placeholder="???????????? ??????????????????." />
                        </div>
                        <div>
                            <label>??????</label>
                            <input type="text" {...register("price")} autoComplete="off" placeholder="????????? ????????? ??????????????????." />
                        </div>
                    </div>
                    <div>
                        <h4>?????? ?????????</h4>
                        <label id="file_img_label" htmlFor="file_img">????????? ???????????? +</label>
                        <input id="file_img" type="file" onChange={onChangeFileUpload} />
                        {images.length > 0 &&
                            <SellImgbox>
                                <h3>????????? ????????????</h3>
                                <div>
                                    {images.map(img => {
                                        return <div key={uuidv4()}>
                                            <img src={`https://storage.googleapis.com/${img}`} />
                                        </div>
                                    })}
                                </div>
                            </SellImgbox>
                        }
                    </div>
                    <div>
                        <h4>????????? ?????? ??????</h4>
                        <ReactQuill onChange={handleChange} placeholder="????????? ?????? ????????? ??????????????????." />
                    </div>

                    <div>
                        <label>??????</label>
                        <input type="text" {...register("remarks")} autoComplete="off" placeholder="??????" />
                    </div>
                    <br />
                    <SellControl>
                        <SellButton>{router?.query?.edit ? "?????? ??????" : "?????? ??????"}</SellButton>
                        <SellButton onClick={() => router.push('/market')}>{router?.query?.edit ? "?????? ??????" : "?????? ??????"}</SellButton>
                    </SellControl>
                </SellForm>
            </SellPageWrapper>
        </SellPageContainer >
    );
};

export default withAuth(SellPage);