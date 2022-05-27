import React, {useCallback, useState} from 'react';
import {Box, Grid} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {currentId} from "../Game";
import CompanyCard from "./CompanyCard";

// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    mainSection: {
        height:255,

        // backgroundImage:`url(${image})`,
        // backgroundRepeat: "no-repeat",


    },
    root:{
        width:250,
    },
}))


//TODO get the card with props of current player,hook only changables

const CompanyStack = ({G,playerId,ctx,moves}) => {
    const classes = useStyles();
    console.log(G);
    // const id = playerId.toString();
    const player = G.players[playerId];



    const cards = player.handCompanyDeck.map(card =>

            <Grid item className={classes.root} sm={6} md={6} xs={6} lg={6} >
                <CompanyCard card={card} key={card.id}  G={G}  ctx={ctx} moves={moves}/>
            </Grid>

            );





    return (


            <Box width={240} height={240}>
                <Grid container spacing={1} justify={"center"} >
                     {cards}
                </Grid>
            </Box>

    );
};


export default CompanyStack;