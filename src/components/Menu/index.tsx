export const Menu = () => {

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
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <span data-feather="home">
                                    Dashboard
                                </span>
                            </a>
                            <a className="nav-link" href="#">
                                <span data-feather="home">
                                    Usuário
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <main className="col-md-9 ms-sm-auto px-md-4">

                </main>
            </div>
        </div>
        </>
    )
}
