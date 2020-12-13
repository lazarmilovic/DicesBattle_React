import React from "react";

class Dices extends React.Component {
  render() {
    return (
      <div className="dices">
        <div className="dices_img">
          <img src={this.props.src_dice1} alt="first dice" id="dice_1" />
          <img src={this.props.src_dice2} alt="second dice" id="dice_2" />
        </div>
        <button onClick={() => this.props.rolling()} id="roll">
          Roll!
        </button>
        <div className="dices_start">
          {!this.props.gameHasStarted && (
            <button onClick={() => this.props.starttheGame()} id="start">
              Start!
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Dices;
