import React, {useRef, useState} from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {carbonDeck} from "../constants/carbonDeck";
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "./ItemTypes";




// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    backCarbon: carbonDeck => ({

        backgroundImage: `url(${process.env.PUBLIC_URL + carbonDeck.backImage})`,



    }),

}))


//TODO get the card with props of current player,hook only changables

const EventTeamPlace = ({setEvent, carbonEvent,key,children}) => {

    const classes = useStyles();
    const ref = useRef(null);
    const [, drop] = useDrop(
        ()=>({
                accept: ItemTypes.TeamCard,
                drop(item,monitor){
                    setEvent(0)
                }



        })
    );


    return (

            <Box ref={drop} display={"flex"} width={"60px"} height={"120px"} onClick={()=>{
                setEvent(--carbonEvent)
            }}  >

                {children}
            </Box>



    );
};


export default EventTeamPlace;