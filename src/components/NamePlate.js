import React from 'react';
import {Box, Typography} from '@material-ui/core'
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
        // display: "flex",
    width: "120px",
        height: "120px",
    borderRadius: "10px",
        border: "1px solid #a49f9f",
        backgroundColor:"white",
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/testsvg2.svg"})`,
        // position:"absolute",
        alignContent:"center",
        // margin:"0 auto",
        zIndex:0,

    },
    nameSection:{
        width:"100%",
        // height:"20%",
        // paddingTop:"5%",
    },
    nameText:{
        color:"white",
        textAlign:"center",
        fontSize:"8pt",
        fontWeight:"1000",

    },
    coinImg: {
        height:"30%",
        width:"85%",
        marginLeft:"5%",
    },
    coinsImg:{
        backgroundColor:"white",
        borderRadius:50,
        border:"3px solid #539bc5",
        height:"61%",
        width:"22%",
    },
    carbonImg:{
        backgroundColor: "black",
        border: "3px solid grey",
        borderRadius:50,
        height:"61%",
        width:"22%",
    },
    teamImg:{
        backgroundColor:"lightskyblue",
        borderRadius:50,
        border:"3px solid purple",
        height:"61%",
        width:"22%",
    },
    coinValue: {
        height:"30%",
        width:"85%",
        marginLeft:"5%",
    },

}))


//TODO get the card with props of current player,hook only changables

const NamePlate = ({G,playerId}) => {
    const classes = useStyles();

    return (

        <Box   position="relative" className={classes.mainSection}>

            {/*<Box className={classes.nameSection} >*/}
            {/*    <Typography className={classes.nameText}>*/}
            {/*                Business Leader*/}
            {/*    </Typography>*/}
            {/*</Box>*/}
            {/*<Box display={"flex"} justifyContent={"space-between"} className={classes.coinImg}>*/}
            {/*    <Box className={classes.coinsImg}></Box>*/}
            {/*    <Box className={classes.carbonImg}></Box>*/}
            {/*    <Box className={classes.teamImg}></Box>*/}
            {/*</Box>*/}
            {/*<Box display={"flex"} justifyContent={"space-between"} className={classes.coinValue} marginBottom={"-10%"}>*/}
            {/*    <Box className={classes.coinsImg}></Box>*/}
            {/*    <Box className={classes.carbonImg}></Box>*/}
            {/*    <Box className={classes.teamImg}></Box>*/}
            {/*</Box>*/}
        </Box>


)};


export default NamePlate;