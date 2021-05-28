import React from "react";
import {Client} from "boardgame.io/react";
// import { Local } from "boardgame.io/multiplayer"; //TODO: Multiplayer
import NZGBoard from "./NZGBoard"
import {Game} from "./Game.js"

const GameClient = Client({
  game: Game,
  board: NZGBoard,
  numPlayers: 4,
  debug: true,

});
const App = () => (
    <div>
      <GameClient/>
    </div>

);
export default App;


