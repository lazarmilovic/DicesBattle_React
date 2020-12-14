import React, { useState } from "react";
import Game from "./components/Game";
function App() {
  const [game, setGame] = useState(1);
  const setNewGame = () => {
    setGame(game + 1);
  };
  return <Game key={game} setNewGame={setNewGame} />;
}

export default App;
