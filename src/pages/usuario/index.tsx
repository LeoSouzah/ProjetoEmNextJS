import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies';
import { Menu } from '../../components/Menu';
import { validaPermissao } from '../../services/validaPermissao';


interface interfProps {
    token?: string;
}

export default function Usuario(props: interfProps) {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Usuário</title>
            </Head>

            <Menu active="usuario" token={props.token}>
                <>

                </>
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

    const temPermissaoPage = validaPermissao(token, ['admin'])

    if (!temPermissaoPage) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }

    return {
        props: {
            token
        }
    }
}




