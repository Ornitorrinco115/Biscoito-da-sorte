import React, { Component } from "react";
import './assets/estilo.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);


    this.frases = ['A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.', 'A maior de todas as torres começa no solo.',
      'A juventude não é uma época da vida, é um estado de espírito']

  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/71qa7JZ0G2L.png')} className="img" />
        <br></br>
        <Botão nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }

}


class Botão extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn} className="Botão">{this.props.nome}</button>
      </div>

    );
  }
}



export default App;