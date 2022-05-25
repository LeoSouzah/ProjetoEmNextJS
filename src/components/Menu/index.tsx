import Link from "next/link"
import { ReactNode } from "react"
import { validaPermissao } from "../../services/validaPermissao";


interface InterfaceProps {
    children: ReactNode,
    active: string;
    token?: string;
}


export const Menu = ({
    children,
    active,
    token

}: InterfaceProps) => {

    return (
        <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
                Sistema de Autenticação
            </a>

            <div className="navbar-nav">
                <div className="navbar-item text-nowrap">
                    <a className="nav-link px-3" href="#">
                        Sair
                    </a>
                </div>
            </div>
        </header>

        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                    <ul className="nav flex-column">
                        {
                            validaPermissao(token, ['admin', 'colaborador']) &&

                        <li className="nav-item">
                        <Link href={'/dashboard'}>
                            <a className={`nav-link ${active === 'dashboard' && 'active'}`} href="#">
                                <span data-feather="home">
                                    Dashboard
                                </span>
                            </a>
                            </Link>
                            </li>
                        }
                        {
                            validaPermissao(token, ['admin']) &&
                            <li className="nav-item">
                            <Link href={'/usuario'}>
                            <a className={`nav-link ${active === 'usuario' && 'active'}`} href="#">
                                <span data-feather="home">
                                    Usuário
                                </span>
                            </a>
                            </Link>
                        </li>
                        }
                    </ul>
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                    {children}
                </main>
            </div>
        </div>
        </>
    )
}
