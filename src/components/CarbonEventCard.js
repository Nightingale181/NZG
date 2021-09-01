import React,{useState} from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {carbonDeck} from "../constants/carbonDeck";
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
    backCarbon: carbonDeck =>({
        width:180,
        height:180,
        backgroundColor:"white",
        borderRadius:20,
        backgroundPosition: 'center',
        backgroundSize: '101%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${carbonDeck[0].backImage})`,
        // position:"absolute",
        alignContent:"center",
        margin:"0 auto",
        zIndex:0,
        border: '1px solid grey',
    }),
    frontCarbon:{
        width:180,
        height:180,
        backgroundColor:"white",
        borderRadius:20,
        backgroundPosition: 'center',
        backgroundSize: '90%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${carbonDeck[0].frontImage})`,
        // position:"absolute",
        alignContent:"center",
        margin:"0 auto",
        zIndex:0,
    },
}))


//TODO get the card with props of current player,hook only changables

const CarbonEventCard = () => {
    const [event,setEvent] = useState(1)
    const classes = useStyles(carbonDeck);

    return (
        <Box display={"flex"} justifyContent={"space-between"} width={360} height={180}     >
            <Box display={"inline-block"} onClick={()=>{
                setEvent(event + 1)
            }}
                 className={classes.backCarbon}>

            </Box>
            <Box display={"inline-block"}   className={classes.frontCarbon}></Box>
        </Box>


    );
};


export default CarbonEventCard;