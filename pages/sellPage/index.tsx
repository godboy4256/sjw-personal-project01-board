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

interface FormValues {
    email?: string;
    name?: string;
    tags?: string[];
    price?: string;
    remarks?: string;
    images?: string[]
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

const SellPage = () => {
    const [createUseditem] = useMutation(CREATE_USED_ITEM)
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
        const tagContents = refTag?.current?.value
        const newTags = [...tags, tagContents]
        setTags(newTags)
        refTag?.current?.value = ""
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
            console.log(`${result?.data?.createUseditem?._id} 등록 완료!`)
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <SellPageContainer>
            <h2>판매 등록하기</h2>
            <form onSubmit={handleSubmit(onClickSubmit)}>
                상품명: <input type="text" {...register("name")} autoComplete="off" /><br />
                물품 이미지 : <input type="file" onChange={onChangeFileUpload} /><br />
                <ReactQuill onChange={handleChange} />
                <br />
                가격 : <input type="text" {...register("price")} autoComplete="off" /><br />
                비고 : <input type="text" {...register("remarks")} autoComplete="off" />
                <button>상품 등록하기</button>
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

export default SellPage;