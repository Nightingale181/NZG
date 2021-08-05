import React from 'react';
import {Box, Typography,Button} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {companyDeck} from "../constants/companyDeck";
import

// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
  Button:{
      color: "blue",
  },
}))


//TODO get the card with props of current player, hook only changables

const Doit = () => {
    const classes = useStyles();
    console.log();


    return (

        <Box position="relative" className={classes.Button}>
         <Button>do it </Button>
        </Box>
    );
};


export default Doit;