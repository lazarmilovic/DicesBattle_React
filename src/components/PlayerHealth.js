import React from "react";

class PlayerHealth extends React.Component {
  render() {
    return (
      <div className="player_health">
        <div className="player_health_background">
          <div
            className="player_health_background_green"
            style={{ height: this.props.height }}
            // id="player1_health_background_green"
          ></div>
        </div>
        <h2

        //id="player1_health"
        >
          {this.props.health}
        </h2>
      </div>
    );
  }
}

export default PlayerHealth;
