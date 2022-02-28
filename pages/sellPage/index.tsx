import { useForm } from "react-hook-form";
import dynamic from 'next/dynamic';
import { SellPageContainer } from "./styles";
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
            Modal.success({ content: "상품이 등록되었습니다." })
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
            Modal.success({ content: "상품 정보가 수정되었습니다." })
            router.push(`/detailbuy/${router?.query?.itemId}`)
        } catch (error) {
            console.log(error)
        }
    };

    const router = useRouter()
    console.log(router?.query?.edit)

    return (
        <SellPageContainer>
            <h2>{router?.query?.edit ? "상품 수정" : "상품 등록"}</h2>
            <form onSubmit={router?.query?.edit ? handleSubmit(onClickSubmitEdit) : handleSubmit(onClickSubmit)}>
                상품명: <input type="text" {...register("name")} autoComplete="off" /><br />
                물품 이미지 : <input type="file" onChange={onChangeFileUpload} /><br />
                <ReactQuill onChange={handleChange} />
                <br />
                가격 : <input type="text" {...register("price")} autoComplete="off" /><br />
                비고 : <input type="text" {...register("remarks")} autoComplete="off" />
                <button>{router?.query?.edit ? "상품 수정" : "상품 등록"}</button>
            </form>
            <div>
                <h4>태그 추가하기</h4>
                <input ref={refTag} type="text"></input>
                <button onClick={onClickTag}>태그 추가</button>
                {
                    tags.length > 0 && <ul>
                        {
                            tags.map(el => {
                                return <li key={uuidv4()}>{el}</li>
                            })
                        }
                    </ul>
                }
            </div>
            {images.length > 0 &&
                <div>
                    <h3>이미지 미리보기</h3>
                    {images.map(img => {
                        return <li key={uuidv4()}>
                            <img src={`https://storage.googleapis.com/${img}`} />
                        </li>
                    })}
                </div>
            }
        </SellPageContainer>
    );
};

export default withAuth(SellPage);