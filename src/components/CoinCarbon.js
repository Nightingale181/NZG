import React, {useState} from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import '../styles/App.css';
// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => (
    {
        mainSection: {
            display: "flex",
            fontSize: 18,
            // backgroundColor:"green",

            width: "32px",
            height: "32px",
            alignItems: "center",
            justifyContent: "space-around",
        }
    }));


//TODO get the card with props of current player,hook only changables


const CoinCarbon = ({item,children}) => {

    const classes = useStyles();

    return (
        <>
            <Box className={`${classes.mainSection} + " " + mainFont greyFont `}>

                {item.actualCarbon}


            </Box>
            {children}
        </>
    );
};

export default CoinCarbon;