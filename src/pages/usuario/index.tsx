import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies';
import { Menu } from '../../components/Menu';

export default function Usuario() {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Usuário</title>
            </Head>

            <Menu active="usuario">
                <></>
            </Menu>
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




