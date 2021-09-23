// Importar módulo
import React from "react";
import ReactDom from "react-dom";

// Importar Css
import "./style.css";

// Importar o formulário
import Formulario from "./Formulario";

// Importar a Tabela
import Tabela from "./tabela";

// Componente
class Principal extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            nome : '',
            idade : '',
            vetor : []
        }
    }

    // Função ao digitar (onChange)
    aoDigitar = (campo) => {
            this.setState({[campo.target.name] : campo.target.value});
    }

    // Função clique (onSubmit)
    AoClicar = (botao) => {
        botao.preventDefault();
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome' : this.state.nome,
            'idade' : this.state.idade
        });
        this.setState({vetor : copiaVetor});

        this.setState({
            nome: '',
            idade: ''
        })
    }

    //Render
    render(){
        return(
            <div>
                <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} funcaoBotao={this.AoClicar} funcaoCampo={this.aoDigitar} />
                <Tabela dados={this.state.vetor} />
            </div>
        )
    }
}

// Render
ReactDom.render(<Principal />, document.getElementById('root'));