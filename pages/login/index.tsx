import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../_app";
import {
    LoginPageStyles,
    LoginForm
} from "./login.styles";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const Login = () => {
    const { setAccessToken }: any = useContext(GlobalContext)
    const router = useRouter()
    const [loginUser] = useMutation(LOGIN_USER)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {
        try {
            const result = await loginUser({
                variables: {
                    email: data?.email,
                    password: data?.password
                }
            });
            result && localStorage.setItem('accessToken', result?.data?.loginUser?.accessToken)
            result && setAccessToken(result?.data?.loginUser?.accessToken)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <LoginPageStyles>
            <h2>로그인</h2>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="id">아이디</label>
                    <input type="text" id="id" {...register("email")} />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" {...register("password")} />
                </div>
                <button>로그인</button>
            </LoginForm>
        </LoginPageStyles >
    );
};

export default Login;