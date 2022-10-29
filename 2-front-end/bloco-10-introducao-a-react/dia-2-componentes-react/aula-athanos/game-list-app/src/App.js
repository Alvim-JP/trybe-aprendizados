import React from "react";
import Header from "./Header";
import "./App.css";
import GameInfo from "./GameInfo";

class App extends React.Component {
  // mostraData() {
  //   const data = new Date();
  //   return `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
  // }
  render() {
    // const titulo = "Lista de jogos mais vendidos";
    // const listaDeGames = [
    //   <li>Minecraft</li>,
    //   <li>Tetris</li>,
    //   <li>Super Mario</li>,
    //   <li>Pokermons</li>,
    // ];
    return (
      <div>
        <Header titulo='Lista de games mais vendidos' icone=''/>
        <section>
          <GameInfo id='1' title='Minecraft'/>
        </section>
        {/* <h1>{titulo}</h1>
        <ol>{listaDeGames}</ol>
        {this.mostraData()} */}
      </div>
    );
  }
}

export default App;
