import React from "react";

class GameInfo extends React.Component {
  render() {
    const {id, title, developer, sales, img} = this.props.gameInfo;
    return (
      <section>
        <div>
        <span>
          <strong>ID:</strong> {id}
        </span> 
        <span>
          <strong>Título:</strong> {title}
        </span>
        <span>
          <strong>Developer:</strong> {developer}
        </span>
        <span>
          <strong>Sales:</strong> {sales}
        </span>
      </div>
      <img src="" alt=""></img>
      </section>
      
    );
  }
}
export default GameInfo;
