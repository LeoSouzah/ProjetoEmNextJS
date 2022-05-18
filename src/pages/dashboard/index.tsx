import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { Menu } from "../../components/Menu";

export default function Dashboard() {

useEffect(() => {
const {'painel-token': token } = parseCookies();

    console.log(token)
},[]);

    return (
        <>
        <Head>

        </Head>

            <Menu></Menu>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (contexto) => {

    const {'painel-token': token} = parseCookies(contexto);

    console.log('token')

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    return {
        props: {

        }
    }
}
