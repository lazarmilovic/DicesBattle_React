import React, { useEffect, useState } from "react";
import changeDices from "../changeDices";
import Player from "./Player";
import Dices from "./Dices";

import "../App.css";

import one from "../img/1.png";

const Game = (props) => {
  const [player1_name, setPlayer1_name] = useState("Player1");
  const [player2_name, setPlayer2_name] = useState("Player2");
  const [player1_health, setPlayer1_health] = useState(100);
  const [player2_health, setPlayer2_health] = useState(100);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [dice1, setDice1] = useState(one);
  const [dice2, setDice2] = useState(one);
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameHasFinished, setGameHasFinished] = useState(false);
  const [playerIsWounded, setPlayerIsWounded] = useState(false);
  const [totalHit, setTotalHit] = useState(0);
  const [woundedPlayer, setWoundedPlayer] = useState(2);

  //this function will be used to start the game. Once the start button is clicked it will trigger two prompts below and will change the value of 'gameHasStarted' variable which will cause start button to be removed from the render in order to prevent players to re-start the game in the middle of it.

  const startTheGame = () => {
    let Player1 = prompt("Please set name for Player 1");
    setPlayer1_name(Player1.toUpperCase());
    let Player2 = prompt("Please set name for Player 2");
    setPlayer2_name(Player2.toUpperCase());
    setGameHasStarted(true);
  };
  //this function will be used to send props to Player component wich will set active class to one of the components.
  const checkActiveClass = (player) => {
    return player === activePlayer ? "active" : "";
  };

  //useEffect will be called once a player rolled the dices and set totalHit constant to a number greater than 0 and will reduce opponent's health by one on every 0.3 seconds and also decrement totalHit by one every time player's health is decremented. Once totalHit reaches 0, it will change the playerIsWounded const to false so the "Roll" button can be displayed again and the opponent can roll the dices.
  useEffect(() => {
    if (totalHit > 0 && !gameHasFinished) {
      let timer = setInterval(() => {
        let health;
        if (woundedPlayer === 1) {
          health = player1_health - 1;
          setPlayer1_health(health);
          checkTheVictory();
        } else {
          health = player2_health - 1;
          setPlayer2_health(health);
          checkTheVictory();
        }

        setTotalHit(totalHit - 1);
      }, 300);

      return () => {
        clearInterval(timer);
      };
    } else {
      setPlayerIsWounded(false);
      setActivePlayer(woundedPlayer);
    }
  });

  //this function will check if the game has started first- if so, it will set playerIsWounded to true and the Roll button will be disabled in order to stop another player to roll the dices while losing health.
  const rollTheDices = () => {
    if (!gameHasStarted) {
      alert("Please start the game first!");
    } else {
      setPlayerIsWounded(true);
      //getting random number 1-6 for two dices and the sum of it will be the totalHit const.
      let dice_1 = Math.floor(Math.random() * 6) + 1;
      let dice_2 = Math.floor(Math.random() * 6) + 1;
      let _totalHit = dice_1 + dice_2;
      setTotalHit(_totalHit);
      //changing the source of the dice images.
      let dice_1_src = changeDices(dice_1);
      let dice_2_src = changeDices(dice_2);
      setDice1(dice_1_src);
      setDice2(dice_2_src);
      //setting a new activePlayer- it is now the player that was "wounded".
      setActivePlayer(woundedPlayer);
      //setting new woudnedPlayer.
      if (woundedPlayer === 2) {
        setWoundedPlayer(1);
      } else {
        setWoundedPlayer(2);
      }
    }
  };

  //this function will return the 'energy level' of each player which will be represendted in pixels and it is the actual height of a div- so every time a player is wonded, the div will get smaller for the exact amount of pixels that is equvalent to the totalHit from rollTheDices. Each player starts with 100 energy level and the div that represents it has 100px so it will get smaller simultaneously.
  const calcHeight = (player) => {
    if (player === 1) {
      return `${player1_health}px `;
    } else {
      return `${player2_health}px`;
    }
  };

  //this function will check if any of the player has won- or if the opponent has reached 0 energy level.
  const checkTheVictory = () => {
    if (player1_health < 1 || player2_health < 1) {
      setGameHasFinished(true);
    }
  };
  //this statement will watch for a change in gameHasFinished const- once it becomes true, it will alert the winner and render new Game component with a different key.
  if (gameHasFinished) {
    if (player1_health > player2_health) {
      alert(`Congrats to ${player1_name}, you won! The game will reload.`);
    } else {
      alert(`Congrats to ${player2_name}, you won! The game will reload.`);
    }

    props.setNewGame();
  }

  return (
    <div className="container">
      <Player
        name={player1_name}
        health={player1_health}
        active={checkActiveClass}
        number={1}
        height={calcHeight}
      />
      <Dices
        gameHasStarted={gameHasStarted}
        starttheGame={startTheGame}
        rolling={rollTheDices}
        src_dice1={dice1}
        src_dice2={dice2}
        playerIsWounded={playerIsWounded}
      />
      <Player
        name={player2_name}
        health={player2_health}
        active={checkActiveClass}
        number={2}
        height={calcHeight}
      />
    </div>
  );
};

export default Game;
