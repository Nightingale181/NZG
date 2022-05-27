import React from "react";
import {Client} from "boardgame.io/react";
// import { Local } from "boardgame.io/multiplayer"; //TODO: Multiplayer
import {NZGBoard} from "./NZGBoard";
import {Game} from "./Game.js";
import { Debug } from 'boardgame.io/debug';



const App = Client({
    game: Game,
    board: NZGBoard,
    numPlayers: 4,
    debug:false,

});

export default App;


