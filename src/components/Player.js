import React from "react";
import PlayerHealth from "./PlayerHealth";

class Player extends React.Component {
  render() {
    return (
      <div
        className={`player ${this.props.active(this.props.number)}`}
        //id="player_1"
      >
        <div className="player_info">
          <h1
          //id="player1_info"
          >
            {this.props.name}
          </h1>
          <h3
          //id="player1_turn"
          >
            Your turn!
          </h3>
        </div>
        <PlayerHealth
          health={this.props.health}
          height={this.props.height(this.props.number)}
        />
      </div>
    );
  }
}

export default Player;
