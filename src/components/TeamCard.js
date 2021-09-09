import React, {useCallback, useState} from 'react';
import {Box, Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {GridContextProvider, GridDropZone, GridItem} from "react-grid-dnd";





// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    mainSection: {
        width:"60px",
        // border: "0.5px solid #a49f9f",
        height:"120px",
        // backgroundColor:"limegreen",
        borderRadius:"8px",
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/testsvg.svg"})`,
        // position:"absolute",
        alignContent:"center",
        // margin:"0 auto",s
        // zIndex:0,
        // marginRight:"1px",
        // marginTop:"",
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