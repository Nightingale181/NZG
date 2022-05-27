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
import CoinCarbon from "./CoinCarbon";
import CoinMoney from "./CoinMoney";

// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    mainSection: {
        // display: "flex",
        width: "120px",
        height: "120px",
        borderRadius: "8px",
        // border: "1px solid #a49f9f",
        // backgroundColor:"white",
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',

        // position:"absolute",
        alignContent: "center",
        // margin:"0 auto",
        zIndex: 0,

    },

    avatarNumber2:{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/avatars/Avatar_B.svg"})`,
    },
    avatarNumber1:{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/avatars/Avatar_Aturn.svg"})`,
    },
    avatarNumber3:{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/avatars/Avatar_C.svg"})`,
    },
    avatarNumber4:{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/avatars/Avatar_D.svg"})`,
    },
    nameSection: {
        width: "100%",
        // height:"20%",
        // paddingTop:"5%",
    },
    nameText: {
        color: "white",
        textAlign: "center",
        fontSize: "8pt",
        fontWeight: "1000",

    },
    coinImg: {
        height: "30%",
        width: "85%",
        marginLeft: "5%",
    },
    coinsImg: {
        backgroundColor: "white",
        borderRadius: 50,
        border: "3px solid #539bc5",
        height: "61%",
        width: "22%",
    },
    carbonImg: {
        backgroundColor: "black",
        border: "3px solid grey",
        borderRadius: 50,
        height: "61%",
        width: "22%",
    },
    teamImg: {
        backgroundColor: "lightskyblue",
        borderRadius: 50,
        border: "3px solid purple",
        height: "61%",
        width: "22%",
    },
    coinValue: {
        height: "30%",
        width: "85%",
        marginLeft: "5%",
    },

}))


//TODO get the card with props of current player,hook only changables

const NamePlate = ({G, playerId,avatarId}) => {
    const classes = useStyles();


    const cardDirectionClass = (avatarId) => {

        if (avatarId === 2) {

            return (
              <Box position="relative" className={[classes.mainSection, classes.avatarNumber2].join(' ')}>

              </Box>
            );
        }
        if (avatarId === 1) {
            return (
                <Box position="relative" className={[classes.mainSection, classes.avatarNumber1].join(' ')}>

                </Box>
            );
        }
        if (avatarId === 3) {

            return (
                <Box position="relative" className={[classes.mainSection, classes.avatarNumber3].join(' ')}>

                </Box>
            );
        }
        if (avatarId === 4) {

            return (
                <Box position="relative" className={[classes.mainSection, classes.avatarNumber4].join(' ')}>

                </Box>
            );
        }
    }
    return (
        <Box>
            {cardDirectionClass(avatarId)}
        </Box>
    );

};


export default NamePlate;