import React, {useCallback, useState} from 'react';
import {Box, Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {GridContextProvider, GridDropZone, GridItem} from "react-grid-dnd";





// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    mainSection: {
        width:45,
        height:90,
        backgroundColor:"white",
        borderRadius:6,
        backgroundPosition: 'center',
        backgroundSize: '90%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(../img/tc1.png)`,
        // position:"absolute",
        alignContent:"center",
        // margin:"0 auto",
        zIndex:0,
        marginRight:"1px",
    },

}))


//TODO get the card with props of current player,hook only changables

const TeamCard = ({G,card}) => {
    const classes = useStyles();







    return (

        <Box       className={classes.mainSection}>

        </Box>





    );
}


export default TeamCard;