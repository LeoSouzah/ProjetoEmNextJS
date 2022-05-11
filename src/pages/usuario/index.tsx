import { useRouter } from 'next/router'

export default function Usuario() {

    const router = useRouter();

    return (
        <>
            <h1>Usuario</h1>
            <button onClick={() => {

                router.push('/dashboard/paraguai');

            }}>Ir para o dashboard</button>
        </>
    )
}
