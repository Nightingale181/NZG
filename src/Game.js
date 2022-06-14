import {useState} from 'react'
import {companyDeck} from "./constants/companyDeck"
import {carbonDeck} from "./constants/carbonDeck"
import {teamDeck} from "./constants/teamDeck"
import {keys} from "@material-ui/core/styles/createBreakpoints";

// const getLength = (G,ctx) =>{
//     let lengthOfCom = G.players[0].handCompanyDeck.length;
//     return lengthOfCom;
// };
// export default getLength;

// function DrawCard(G, ctx) {
//     G.deck--;
//     G.hand[ctx.currentPlayer]++;
// }
//
// function PlayCard(G, ctx) {
//     G.deck++;
//     G.hand[ctx.currentPlayer]--;
// }
//
// export const Game = {
//     setup: ctx => ({ deck: 6, hand: Array(ctx.numPlayers).fill(0) }),
//     moves: { DrawCard, PlayCard },
//     turn: { moveLimit: 1 },
// };

// function DrawCard(G, ctx) {
//     G.companyDeck--;
//     G.hand[ctx.currentPlayer]++;
//     G.bank.coin[ctx.currentPlayer]++;
//
// }

// function PlayCard(G, ctx) {
//     G.companyDeck++;
//     G.hand[ctx.currentPlayer]--;
// }

export function getInitialState(ctx) {

    const G = {
        deck: [],
        players: [],
        carbonDeck: [],
        currentCarbon: [],
        teamDeck: [],
        companyDeck: [],
        temperatureIncrease: 0,
        bid: 0,
        minBid: 0,
        goldBank: 10,
        silverBank: 30,
        coinBank: 100,
        carbonBank: 30,
    };

    // Add a deck for every player
    // for (let i = 0; i < ctx.numPlayers; i++) {
    G.companyDeck = G.companyDeck.concat(companyDeck);
    G.carbonDeck = G.carbonDeck.concat(carbonDeck);
    G.teamDeck = G.teamDeck.concat(teamDeck);
    // }

    // console.log(ctx.currentPlayer);
    // Shuffle resulting deck using lodash
    // G.companyDeck = ctx.random.Shuffle(G.companyDeck);
    G.carbonDeck = ctx.random.Shuffle(G.carbonDeck);
    G.teamDeck = ctx.random.Shuffle(G.teamDeck);// TODO: Use boardgame.io provided random shuffle function, which will be important when we are running a server

    // Set up the game state for each player
    for (let j = 0; j < ctx.numPlayers; j++) {
        G.players[j] = {
            score: 0,
            handCompanyDeck: [],
            handCarbonDeck: [],
            handTeamDeck: [],
            bank: {
                coin: 15,
                coinsCopy: 15,
                carbonCoins: 0,
                teamMembers: 0
            },
            currentBid: 0,
        };
    }
    // topCard = G.carbonDeck.shift();
    // G.currentCarbon.push(topCard);
    //
    // for (let i = 0; i < 4; i++) {
    //     for (let k = 0; k < 3; k++) {
    //         topCard = G.companyDeck.shift();
    //         G.players[i].handCompanyDeck.push(topCard);
    //     }
    //
    //
    // }
    //
    // for (let i = 0; i < 2; i++) {
    //     for (let k = 0; k < 4; k++) {
    //         topCard = G.teamDeck.shift();
    //         G.players[k].handTeamDeck.push(topCard);
    //     }
    // }


    // For debugging "game over" state– this sets the deck to only have a single card
    // G.deck = new Array(G.deck[0]);

    console.log("Initial Game State", G, "Initial ctx", ctx);

    // Our game state is ready to go– return it!
    return G;
}

let topCard;
let findIndex;


export const currentId = [];

export const Game  = {



    name: "NetZeroGame",

    setup: getInitialState,
    // moves: {
    //     PlayCompany: (G, ctx, props) => {
    //         topCard = G.players[ctx.currentPlayer].handCompanyDeck.shift();
    //         G.companyDeck.push(topCard);
    //     },
    // },
    phases: {
        draw: {
            turn: {moveLimit: 3},
            moves: {
                IncreaseCoin: (G,ctx,name,idCard) => {
                    // alert(name) ;
                    // console.log({name})
                    // console.log(G.companyDeck[idCard-1].actualValue)
                    ++G.companyDeck[idCard-1].actualValue
                    // console.log(G.companyDeck[idCard-1].actualValue)

                    // topCard=G.companyDeck[idCard-1].order===idCard
                    // console.log({topCard})


                    // G.companyDeck[1].actualValue--
                    // console.log(G.companyDeck[0].actualValue)
                },
                DecreaseCoin:(G,ctx,name,idCard)=>{
                    // console.log({name})
                    // console.log({idCard})
                    --G.companyDeck[idCard-1].actualValue
                    // topCard=G.companyDeck[idCard-1].order===idCard
                    // console.log({topCard})
                },
                MoveCard:(G,ctx,name,idCard)=>{
                    // alert(name);
                    console.log(name);


                },
                ChangeEvent:(G,ctx)=>{
                    G.companyDeck[1].actualCarbon--;
                },
                InitialDraw: (G, ctx) => {
                    for (let i = 0; i < 4; i++) {
                        topCard = G.companyDeck.shift();
                        currentId[i] = topCard.id;

                        // console.log(currentId);
                        G.players[ctx.currentPlayer].handCompanyDeck.push(topCard);
                    }

                    for (let i = 0; i < 3; i++) {
                        topCard = G.teamDeck.shift();
                        G.players[ctx.currentPlayer].handTeamDeck.push(topCard);
                    }
                    ctx.events.endTurn();
                },
                DiscardCompany: (G,ctx,id) => {

                    topCard = G.players[ctx.currentPlayer].handCompanyDeck.find((item) => item.id === id);
                    G.companyDeck.push(topCard);
                    findIndex = G.players[ctx.currentPlayer].handCompanyDeck.findIndex(i => i.id === id);
                    if (findIndex > -1) {
                        G.players[ctx.currentPlayer].handCompanyDeck.splice(findIndex, 1);
                    }
                    for (let i = 0; i < G.players[ctx.currentPlayer].handCompanyDeck.length; i++) {
                        G.players[ctx.currentPlayer].bank.coin -= G.players[ctx.currentPlayer].handCompanyDeck[i].initialValue;
                    }
                },
                DiscardTeam: (G, ctx, id) => {
                    topCard = G.players[ctx.currentPlayer].handTeamDeck.find((item) => item.id === id);
                    G.teamDeck.push(topCard);
                    const findIndex = G.players[ctx.currentPlayer].handTeamDeck.findIndex(i => i.id === id);
                    if (findIndex > -1) {
                        G.players[ctx.currentPlayer].handTeamDeck.splice(findIndex, 1);
                    }

                },


            },
            endIf: G => (G.players[3].handTeamDeck.length === 2),//TODO change endif
            start: true,
            next: "pickEvent",
        },
        pickEvent: {
            next: "counterEvent",
            moves: {
                DrawCarbonEventCard: (G, ctx) => {
                    topCard = G.carbonDeck.shift();
                    G.currentCarbon.push(topCard);

                },
                PickCarbonEvent: (G, ctx, id) => {
                    if (id === 1) {

                        G.players[ctx.playerID].bank.coin += G.players[ctx.currentPlayer].handCarbonDeck[0].event1.coinRaise;


                    } else {

                        G.players[ctx.playerID].bank.coin += G.players[ctx.currentPlayer].handCarbonDeck[0].event2.coinRaise;


                    }

                },
            },
            turn: {moveLimit: 2},
        },
        counterEvent: {
            moves: {
                counterEventGRO: (G, ctx, id) => {
                    topCard = G.players[ctx.playerID].handTeamDeck.find((item) => item.type === "GRO");
                    G.teamDeck.push(topCard);
                    findIndex = G.players[ctx.currentPlayer].handCompanyDeck.findIndex(i => i.type === "GRO");
                    if (findIndex > -1) {
                        G.players[ctx.currentPlayer].handCompanyDeck.splice(findIndex, 1);
                    }
                },

            },
            turn: {moveLimit: 1},
        },
        companyMarket: {
            moves: {
                sellCompany: (G, ctx) => {

                },
                bidForCompany: (G, ctx) => {

                },
                takeOverCompany: (G, ctx) => {
                    topCard = G.players[ctx.currentPlayer].handTeamDeck.find((item) => item.type === "GEO");
                    G.teamDeck.push(topCard);

                },
            },
            turn: {moveLimit: 2},
        },


        // turn: {moveLimit: 2},

    }
};


