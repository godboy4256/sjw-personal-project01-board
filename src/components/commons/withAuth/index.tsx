import { Modal } from "antd";
import { query } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
    const router = useRouter();
    console.log(1)

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            Modal.error({ content: "로그인이 필요한 서비스입니다." })
            router.push("/login");
        }
    }, []);

    return <Component {...props} />;
};