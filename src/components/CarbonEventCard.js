import React, {useState} from 'react';
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
const useStyles = makeStyles(theme => ({
    backCarbon: carbonDeck => ({
        width: 240,
        height: 240,
        backgroundColor: "white",
        borderRadius: 8,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + carbonDeck.backImage})`,
        // ${process.env.PUBLIC_URL + '/img/company/cc12.png'}/
        // position:"absolute",
        alignContent: "center",
        // margin:"0 auto",
        zIndex: 0,

        // border: '1px solid #a49f9f',
    }),
    frontCarbon: (carbonDeck)=>({
        width: 240,
        height: 240,
        backgroundColor: "white",
        borderRadius: 8,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + carbonDeck.frontImage})`,
        // position:"absolute",
        alignContent: "center",
        margin: "0 auto",
        zIndex: 0,
        // border: '1px solid #a49f9f',
        // border: '0.5px solid #a49f9f',
    }),
}))


//TODO get the card with props of current player,hook only changables

const CarbonEventCard = (setTest,moves,...rest) => {
    const [carbonEvent, setEvent] = useState(1);
    // const backImage = carbonDeck[0].backImage;
    const [chosenEvent,setChoice] =useState(0);
    const classes = useStyles(carbonDeck[carbonEvent]);



    return (
        <Box display={"flex"} justifyContent={"space-between"} width={"480px"} height={"240px"}
             marginLeft={"-60px"}>
            <Box display={"inline-block"} onClick={() => {
                if(carbonEvent !== 2 ){
                setEvent(carbonEvent + 1);
                setChoice("hey");

                }
            }}
                 className={classes.backCarbon}>

            </Box>
            <Box  display={"flex"} flexWrap={"wrap"} className={classes.frontCarbon}>
                <Box display={"block"} height={"120px"} width={"480px"} onClick={()=>{
                    if (chosenEvent === 0) {
                        setChoice(1);
                        setTest(1);
                    }
                }}> </Box>
                <Box display={"block"} height={"120px"} width={"480px"} onClick={()=>{
                    if (chosenEvent === 0) {
                        setChoice(2);

                    }
                    }}> </Box>
            </Box>
        </Box>


    );
};


export default CarbonEventCard;