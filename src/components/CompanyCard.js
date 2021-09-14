import React, {useState} from 'react';
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import '../styles/App.css';
// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => (
    {
        mainSection: {
            // display: "flex",
            width: "120px",
            height: "120px",
            borderRadius: "10px",
            // backgroundColor:"white",
            border: "black",
        },

        backImage: item => ({
            backgroundImage: `url(${process.env.PUBLIC_URL + item.svgmain})`,
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            height: '120px',
            width: '120px',
            display: 'block',
            margin: 'auto',
            backgroundColor: "white",
            // flexDirection:"column",

            // marginTop: "2%",
            // marginLeft: "3%%",
        }),
        valuesMain: {},
        synergyMain: {},
        actualValues: {
            display: "flex",
            justifyContent: 'space-between',
            width: "87%",
            height: "26%",
            marginLeft: "6%",
            marginTop: "4%",
            paddingTop: "6%",
        },
        carbonActual: {
            backgroundColor: "black",
            border: "3px solid grey",
            height: "90%",
            width: "27%",
            borderRadius: 50,
            marginTop: "2%",
            // marginLeft:"6%",
        },
        carbonDropAct: {
            backgroundColor: "black",
            border: "3px solid grey",
            borderRadius: 50,
            marginTop: "2%",
            height: "3%",
            width: "1.5%",

        },
        carbonActualText: {
            color: "grey",
            fontSize: "16pt",
            marginLeft: "28%",
            marginTop: "-5%",
            fontWeight: 501,
        },
        valueActual: {
            backgroundColor: "white",
            border: "3px solid #539bc5",
            height: "90%",
            width: "27%",
            borderRadius: 50,
            marginTop: "2%",
            // marginLeft: 104,
        },
        valueActualText: {
            color: "black",
            fontSize: "16pt",
            marginLeft: "28%",
            marginTop: "-5%",
            fontWeight: 501,
        },
        initialValues: {
            display: "flex",
            justifyContent: "space-between",
            width: "36%",
            height: "17%",
            marginTop: "12%",
            marginLeft: "57%",
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
        synLeft: {
            backgroundColor: "white",
            border: "2px solid #539bc5",
            height: "10%",
            width: "10%",
            marginTop: "-18%",
            marginLeft: "9%",
            borderRadius: 50,
        },
        synMid: {
            backgroundColor: "white",
            border: "2px solid #539bc5",
            height: "10%",
            borderRadius: 50,
            width: "10%",
            marginTop: "-21%",
            marginLeft: "34%",


        },
        synLeftText: {
            color: "black",
            fontSize: "7pt",
            marginLeft: "1%",
            marginTop: "-5%",
        },
        synMidText: {
            // fontWeight:501,
            color: "black",
            fontSize: "7pt",
            marginLeft: "1%",
            marginTop: "-5%",
        },
        companyName: {
            marginTop: "30.5%",
            marginLeft: "8.5%",
            fontSize: "10pt",

        },
        direction1: {},
        direction2: {
            display: "flex",
            fontSize: 18,
            paddingTop: "80px",
            paddingLeft: "80px",
            // backgroundColor:"green",
            width: "32px",
            height: "32px",
            alignItems: "center",
            justifyContent: "space-around",

        },
        direction3: {},
        direction4: {},
    }))


//TODO get the card with props of current player,hook only changables


const CompanyCard = ({G, item, key, playerID}) => {
    // const card = G.players[0].handCompanyDeck[0]
    const classes = useStyles(item);


    const cardDirectionClass = () => {

        let temporaryClass = [];

        if (item.direction === 2) {
            temporaryClass.push(`${classes.direction2} + " " + mainFont  `);

        }
        if (item.direction === 1) {
            temporaryClass.push(`${classes.direction1} + " " + mainFont  `);

        }
        if (item.direction === 3) {
            temporaryClass.push(`${classes.direction3} + " " + mainFont  `);

        }
        if (item.direction === 4) {
            temporaryClass.push(`${classes.direction4} + " " + mainFont  `);

        }

        return temporaryClass[0];
    }


    // console.log(ID)
    // console.log(currentId)
    // const [{ isDragging }, drag] = useDrag({
    //     type: "companyCard",
    //     id: `${key}`,
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),
    // })

    // console.log(props.ctx);w
    //console.log(playerId);


    return (
        <>
            {/*<img src={process.env.PUBLIC_URL + '/img/company/cc12.png'} alt=""/>*/}
            <Box className={`${classes.mainSection}`}>


                <Box className={`${classes.backImage}`}>





                    <Box className={cardDirectionClass()}>

                        {
                            item.actualValue
                        }

                    </Box>


                    {/*<Box zIndex={1} className={classes.actualValues}>*/}


                    {/*    <Box className={classes.carbonActual}>*/}
                    {/*        <Typography className={classes.carbonActualText}>{G.players["2"].handCompanyDeck[0].carbonCoins}</Typography>*/}
                    {/*    </Box>*/}


                    {/*    <Box className={classes.valueActual}>*/}
                    {/*        <Typography className={`${classes.valueActualText} `}>{G.players[1].handCompanyDeck[0].initialCarbon}</Typography>*/}
                    {/*    </Box>*/}


                    {/*</Box>*/}
                    {/*<Box zIndex={2} className={classes.initialValues}>*/}
                    {/*    <Box className={classes.initialValue}>*/}
                    {/*        <Typography className={classes.initialValueText}>{G.players[1].handCompanyDeck[0].carbonCoins}</Typography>*/}
                    {/*    </Box>*/}
                    {/*    <Box className={classes.initialCarbon}>*/}
                    {/*        <Typography className={classes.initialCarbonText}>{G.players[1].handCompanyDeck[0].initialCarbon}</Typography>*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}


                    {/*<Box className={classes.synLeft}>*/}
                    {/*    <Typography className={classes.synLeftText}>+3</Typography>*/}
                    {/*</Box>*/}
                    {/*<Box className={classes.synMid}>*/}
                    {/*    <Typography className={classes.synMidText}>+3</Typography>*/}
                    {/*</Box>*/}
                    {/*<Box className={classes.companyName}>{item.companyName}</Box>*/}

                </Box>

            </Box>


        </>
    );
};


export default CompanyCard;