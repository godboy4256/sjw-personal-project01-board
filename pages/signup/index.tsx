import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SignupContainerStyles, SignupFormStyles } from "./signup.styles";

const CREATE_USER = gql`
    mutation createUser($createUserInput:CreateUserInput!){
        createUser(createUserInput:$createUserInput){
            _id
        }
    }
`


interface FormValues {
    email?: string;
    password?: string;
    name?: string;
}

const SignUp = () => {
    const [createUser] = useMutation(CREATE_USER)
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    const onClickSubmit = async (data: FormValues) => {
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        email: data?.email,
                        password: data?.password,
                        name: data?.name
                    }
                }
            })
            console.log(result)
            alert('회원가입이 완료되었습니다.')
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <SignupContainerStyles>
            <h3>간편하게 회원가입!</h3>
            <SignupFormStyles onSubmit={handleSubmit(onClickSubmit)}>
                아이디: <input type="text" {...register("email")} />
                비밀번호: <input type="password" {...register("password")} />
                이름: <input type="text" {...register("name")} />
                <button>간편 회원가입</button>
            </SignupFormStyles>
        </SignupContainerStyles>
    );
};

export default SignUp;