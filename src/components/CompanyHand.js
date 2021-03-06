import React, {useCallback, useState} from 'react';
import {Box, Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {currentId} from "../Game";
// import CompanyCard from "./CompanyCard";


// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({

    root:{
        width:200,
    },
    mainSection:   {
        // display: "flex",
        width: 100,
        height: 100 ,
        borderRadius: 20,
        backgroundColor:"white",
        border:"black",
    },

    backImage: card =>( {
        backgroundImage:`url(${card.synmain})`,
        backgroundPosition: 'center',
        backgroundSize: '86%',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        display: 'block',
        margin: 'auto',
        // flexDirection:"column",

        // marginTop: "2%",
        // marginLeft: "3%%",
    }),
    valuesMain: {},
    synergyMain: {},
    actualValues:{
        display:"flex",
        justifyContent:'space-between',
        width:"87%",
        height:"26%",
        marginLeft:"6%",
        marginTop:"4%",
        paddingTop:"6%",
    },
    carbonActual: {
        backgroundColor: "black",
        border: "3px solid grey",
        height: "90%",
        width: "27%",
        borderRadius: 50,
        marginTop:"2%",
        // marginLeft:"6%",
    },
    carbonDropAct:{
        backgroundColor: "black",
        border: "3px solid grey",
        borderRadius: 50,
        marginTop:"2%",
        height: "3%",
        width: "1.5%",

    },
    carbonActualText: {
        color: "grey",
        fontSize: "16pt",
        marginLeft: "28%",
        marginTop: "-5%",
        fontWeight:501,
    },
    valueActual: {
        backgroundColor: "white",
        border: "3px solid #539bc5",
        height: "90%",
        width: "27%",
        borderRadius: 50,
        marginTop:"2%",
        // marginLeft: 104,
    },
    valueActualText: {
        color: "black",
        fontSize: "16pt",
        marginLeft: "28%",
        marginTop: "-5%",
        fontWeight:501,
    },
    initialValues:{
        display:"flex",
        justifyContent:"space-between",
        width:"36%",
        height:"17%",
        marginTop:"12%",
        marginLeft:"57%",
    },
    initialCarbon: {
        backgroundColor: "black",
        border: "3px solid grey",
        // height: "100%",
        width: "34%",
        borderRadius: 50,

    },
    initialValue: {
        backgroundColor: "white",
        border: "3px solid #539bc5",
        // height: "100%",
        width: "34%",
        borderRadius: 50,

    },
    initialCarbonText: {
        color: "grey",
        fontSize: "11pt",
        marginLeft: "23%",
        marginTop: "-19%",
        // fontWeight:501,
    },
    initialValueText: {
        color: "black",
        fontSize: "11pt",
        marginLeft: "23%",
        marginTop: "-19%",
        // fontWeight:501,
    },
    synLeft:{
        backgroundColor: "white",
        border: "2px solid #539bc5",
        height: "10%",
        width: "10%",
        marginTop: "-18%",
        marginLeft: "9%",
        borderRadius: 50,
    },
    synMid:{
        backgroundColor: "white",
        border: "2px solid #539bc5",
        height: "10%",
        borderRadius:50,
        width: "10%",
        marginTop: "-21%",
        marginLeft: "34%",


    },
    synLeftText:{
        color: "black",
        fontSize: "7pt",
        marginLeft: "1%",
        marginTop: "-5%",
    },
    synMidText:{
        // fontWeight:501,
        color: "black",
        fontSize: "7pt",
        marginLeft: "1%",
        marginTop: "-5%",
    },
    companyName:{
        marginTop: "30.5%",
        marginLeft:"8.5%",
        fontSize:"10pt",

    },
}))



//TODO get the card with props of current player,hook only changables

const CompanyHand = ({G,playerId,ctx,moves}) => {
    const classes = useStyles();

    console.log(G);
    // const id = playerId.toString();
    const player = G.players[playerId];

    const [handCards, setHandCards] = useState(player.handCompanyDeck);


    const CompanyCard = ({card,key,G,ctx,moves}) => {

        const classes = useStyles(card);
        // console.log(currentId)


        // console.log(props.ctx);
        //console.log(playerId);






        return (

            <Box
                className={`${classes.mainSection}`}
            >


                <Box className={`${classes.backImage}`}>
                    <Box zIndex={1} className={classes.actualValues}>


                        <Box className={classes.carbonActual}>
                            <Typography className={classes.carbonActualText}>{card.actualCarbon}</Typography>
                        </Box>


                        <Box className={classes.valueActual}>
                            <Typography className={`${classes.valueActualText} `}>{card.actualValue}</Typography>
                        </Box>


                    </Box>
                    <Box zIndex={2} className={classes.initialValues}>
                        <Box className={classes.initialValue}>
                            <Typography className={classes.initialValueText}>{card.initialValue}</Typography>
                        </Box>
                        <Box className={classes.initialCarbon}>
                            <Typography className={classes.initialCarbonText}>{card.initialCarbon}</Typography>
                        </Box>
                    </Box>


                    <Box className={classes.synLeft}>
                        <Typography className={classes.synLeftText}>+3</Typography>
                    </Box>
                    <Box className={classes.synMid}>
                        <Typography className={classes.synMidText}>+3</Typography>
                    </Box>
                    <Box className={classes.companyName}>{card.companyName}</Box>

                </Box>

            </Box>


        );
    };

    const cards = handCards.map(card =>

        <Grid item className={classes.root} sm={6} md={6} xs={6} lg={6} >
            <CompanyCard card={card} key={card.id}  G={G}  ctx={ctx} moves={moves}/>
        </Grid>

    );

    return (


        <Box width={200} height={200}>
            <Grid container spacing={1} justify={"center"} >
                {cards}
            </Grid>
        </Box>

    );
};


export default CompanyHand;