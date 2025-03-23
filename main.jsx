// react-app.js

const { useState } = React;

function Portifolio() {
    const [projetos] = useState([
        { nome: "Projeto Coffee", descricao: "Plataforma web para empresas do setor cafeeiro." },
        { nome: "Landing Page Turismo", descricao: "Site para empresas de turismo captarem clientes." },
        { nome: "Sistema de RH", descricao: "Aplicação para gerenciar processos internos de RH." }
    ]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Meus Projetos</h2>
            <div className="row">
                {projetos.map((projeto, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card p-3 shadow">
                            <h5>{projeto.nome}</h5>
                            <p>{projeto.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<Portifolio />, document.getElementById("projetos"));
