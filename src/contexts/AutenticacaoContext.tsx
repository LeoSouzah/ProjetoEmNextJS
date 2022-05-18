import { useRouter } from "next/router";
import { createContext, ReactNode, useState } from "react";
import { setCookie } from 'nookies'
import api from "../services/request";

interface InterDados {
    email: string;
    senha: string;
}

interface InterAutenticacaoContext {
    logar(dados: InterDados): Promise<void>;
}

export const AutenticacaoContext = createContext({} as InterAutenticacaoContext);

interface InterProviderProps {
    children: ReactNode;
}

export function AutenticacaoProvider({children}: InterProviderProps){

    const [usuario, setUsuario] = useState();
    const router = useRouter();

    async function logar(dados: InterDados) {
        try {
           let resultado = await api.post('/api/login', dados)

            console.log(resultado.data)

            setCookie(
                undefined,
                'painel-token',
                resultado.data.token
            )

           router.push('/dashboard');

        } catch (error) {

        }
    }

    return (

        <AutenticacaoContext.Provider value={{logar}}>
            {children}
        </AutenticacaoContext.Provider>

    )
}
