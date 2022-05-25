import jwt_decode from 'jwt-decode'

export const validaPermissao = (

    token: string | undefined,
    permissao: Array<string>

    ):boolean => {

        if (token) {
            const user = jwt_decode<{
                email: string
                id: number
                nome: string
                permissoes: string
            }>(token);

            const temPermissao = permissao.includes(user.permissoes);

            if(temPermissao){
                return true;
            } else {
                return false;
            }
        }

    return false;
}
