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
    backCarbon: pic =>({
        width:400,
        height:400,
        backgroundColor:"white",
        borderRadius:38,
        backgroundPosition: 'center',
        backgroundSize: '90%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/carbonevent/carbonEventBack.png"})`,
        // ${process.env.PUBLIC_URL + '/img/company/cc12.png'}/
        // position:"absolute",
        alignContent:"center",
        margin:"0 auto",
        zIndex:0,
        border: '0.5px solid #a49f9f',
    }),
    frontCarbon:{
        width:400,
        height:400,
        backgroundColor:"white",
        borderRadius:38,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/ce1test.png"})`,
        // position:"absolute",
        alignContent:"center",
        margin:"0 auto",
        zIndex:0,
        // border: '0.5px solid #a49f9f',
    },
}))


//TODO get the card with props of current player,hook only changables

const CarbonEventCard = () => {
    const [event,setEvent] = useState(1)

    const classes = useStyles(carbonDeck);

    return (
        <Box display={"flex"} justifyContent={"space-between"} width={"800px"} height={"400px"}  marginTop={"-200px"}   >
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