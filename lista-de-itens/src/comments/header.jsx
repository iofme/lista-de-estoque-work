const Header = ()=>{
    return(
        <header className="cabecalho">
            <h1 className="title-header">IT Warehouse</h1>
            <input type="search" name="pesquisa" id="search" />
            <div className="buttons-header">
                <button className="button1-cabecalho">
                    Editar
                </button>
                <button className="button2-cabecalho">
                    New Item
                </button>
            </div>
        </header>
    )
}

export default Header