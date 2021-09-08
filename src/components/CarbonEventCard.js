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
        width:240,
        height:240,
        backgroundColor:"white",
        borderRadius:15,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/testsvg5.svg"})`,
        // ${process.env.PUBLIC_URL + '/img/company/cc12.png'}/
        // position:"absolute",
        alignContent:"center",
        // margin:"0 auto",
        zIndex:0,

        // border: '1px solid #a49f9f',
    }),
    frontCarbon:{
        width:240,
        height:240,
        backgroundColor:"white",
        borderRadius:16,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/testsvg5.svg"})`,
        // position:"absolute",
        alignContent:"center",
        margin:"0 auto",
        zIndex:0,
        // border: '1px solid #a49f9f',
        // border: '0.5px solid #a49f9f',
    },
}))


//TODO get the card with props of current player,hook only changables

const CarbonEventCard = () => {
    const [event,setEvent] = useState(1)

    const classes = useStyles(carbonDeck);

    return (
        <Box display={"flex"} justifyContent={"space-between"} width={"480px"} height={"240px"}  marginTop={"-120px"}  marginLeft={"-80px"}  >
            <Box display={"inline-block"}  onClick={()=>{
                setEvent(event + 1)
            }}
                 className={classes.backCarbon}>

            </Box>
            <Box display={"inline-block"}   className={classes.frontCarbon}></Box>
        </Box>


    );
};


export default CarbonEventCard;