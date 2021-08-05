import React,{useState} from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {companyDeck} from "../constants/companyDeck";
import {currentId} from "../Game";
import {
    Draggable,
    Droppable,
    DragComponent,
    DragState
} from "react-dragtastic";
import CarbonValue from "./CarbonValue";


// const image = "../img/company/14/background-1.png"
const useStyles =  makeStyles(theme => ({
    mainSection:{
        width:240,
        height:240,
        backgroundColor:"white",
        borderRadius:20,
        // position:"fixed",
        // alignContent:"center",
        margin:"0 auto",
    },
}))


//TODO get the card with props of current player,hook only changables

const CarbonEventCard = ({card,key,G,ctx}) => {

    const classes = useStyles(card);

    return (

        <Box className={classes.mainSection} >

        </Box>

    );
};


export default CarbonEventCard;