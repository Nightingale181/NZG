import React from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {
    Draggable,
    Droppable,
    DragComponent,
    DragState
} from "react-dragtastic";

// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    carbonActual: {
        backgroundColor: "black",
        border: "3px solid grey",
        height: "90%",
        width: "27%",
        borderRadius: 50,
        marginTop:"2%",
        // marginLeft:"6%",
    },
    carbonActualText: {
        color: "grey",
        fontSize: "16pt",
        marginLeft: "28%",
        marginTop: "-5%",
        fontWeight:501,
    },
    carbonDropAct:{
        backgroundColor: "black",
        border: "3px solid grey",
        borderRadius: 50,
        marginTop:"2%",
        height: "3%",
        width: "1.5%",

    },

}))


//TODO get the card with props of current player,hook only changables

const CarbonValue = ({G,ctx,card,playerId,}) => {
    const classes = useStyles();
    return (
<Box>
        <Draggable id={card.id} type={"actual"} >
            {dragState => (
                <Box {...dragState.events} className={classes.carbonActual}>
                    <Typography className={classes.carbonActualText}>{card.actualCarbon}</Typography>
                </Box>
            )}
        </Draggable>

    <DragComponent for={card.id} >
        {dragState => (

            <Box  className={classes.carbonDropAct} style={{
                position:"fixed",
                pointerEvents: 'none',
                left: dragState.x -10  ,
                top: dragState.y -30
            }} onDrag={()=> {
                console.log(...dragState.isOverAccepted);
            }}
            >
                <Typography className={classes.carbonActualText}>1</Typography>
            </Box>
        )}
    </DragComponent>
</Box>
    );
};


export default CarbonValue;