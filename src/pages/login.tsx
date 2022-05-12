import Head from 'next/head'
import { useCallback, useRef } from 'react'

export default function Login() {

    const refForm = useRef<any>();

    const submitForm = useCallback((e) =>{
        //não renderiza a página quando executa o submit do formulário.
        e.preventDefault();

        if (refForm.current.checkValidity()) {

        } else {
            refForm.current.classList.add('was-validated')
        }

    },[])

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh'
            }}
                >
                <div 
                    style={{
                        border: 2,
                        borderColor: '#ccc',
                        borderStyle: 'solid',
                        borderRadius: 8,
                        padding: 20,
                        maxWidth: 400
                    }}
                >
                    <div
                    style={{
                        alignItems: 'center'
                    }}
                >
                <h1 style={{color: "#0d6efd"}}>
                        Login
                </h1>
                <p>
                        Digite seus dados para entrar no Sistema.
                </p>

                    </div>
                    <hr />
                    <form
                    className='row g-3 needs-validation'
                    noValidate
                    ref={refForm}
                    >
                        <div className='col-md-12'>
                            <label htmlFor='email' className='form-label'>E-Mail:</label>
                            <div className='input-group has-validation'>
                                <span className='input-group-text'>@</span>
                                <input type='email' className='form-control' placeholder='Digite seu E-Mail' id="email" required />
                                <div className='invalid-feedback'>
                                    Por favor digite seu e-mail.
                                </div>
                            </div>
                        </div>

                        <div className='col-md-12'>
                               <label htmlFor='senha' className='form-label'>Senha</label>
                               <input type='password' className='form-control' placeholder='Digite sua Senha' id="senha" required />
                               <div className='invalid-feedback'>
                                   Por favor digite sua senha.
                               </div>
                         </div>

                         <div className='col-md-12 mt-2'>
                                <button className='btn btn-primary' type='submit' onClick={(e)=> submitForm(e)}>
                                    Enviar
                                </button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}