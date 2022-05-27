const { Server, Origins } = require('boardgame.io/server');

const NZG = require("./Game").Game;
const server = Server({
    // Provide the definitions for your game(s).

    games: [NZG],

    // Provide the database storage class to use.


    origins: [
        // Allow your game site to connect.

        // Allow localhost to connect, except when NODE_ENV is 'production'.
    ],
});

server.run(8000, () => console.log("server running..."));