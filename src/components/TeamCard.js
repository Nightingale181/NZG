import React, {useCallback, useState} from 'react';
import {Box, Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {currentId} from "../Game";
import CompanyCard from "./CompanyCard";
import {
    Draggable,
    Droppable,
    DragComponent,
    DragState
} from "react-dragtastic"

// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    mainSection: {
      backgroundColor:"white",
        marginTop:-110,
        marginLeft:240,
        zIndex:1,
    },
    dragComponent:{
        width:58,
        height:120,
        borderRadius:15,
        backgroundColor:"white",
    },
}))


//TODO get the card with props of current player,hook only changables

const TeamCard = ({G,playerId,ctx,moves}) => {
    const classes = useStyles();
    console.log(G);





    return (
        <Box>
        <Draggable id={"team"} type={"team"} >
            {dragState => (

                <Box {...dragState.events} width={58} height={120} borderRadius={15} className={classes.mainSection} textAlign={"center"}>
                    Team Card
                </Box>
            )}
        </Draggable>

            <DragComponent for={"team"}>
                {dragState => (

                    <Box  className={classes.dragComponent} style={{
                        position:"fixed",
                        pointerEvents: 'none',
                        left: dragState.x -10  ,
                        top: dragState.y -30
                    }} onDrag={()=> {
                        console.log(1);
                    }}>
                        <Typography>Team card</Typography>
                    </Box>
                )}
            </DragComponent>

        </Box>


    );
};


export default TeamCard;