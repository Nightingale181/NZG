import React, {useState, useEffect, useMemo, memo, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import CoinCarbon from "../CoinCarbon";
import Coin from "./Coin";
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import '../../styles/App.css';


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
            // backgroundColor: "white",
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
        directionValue1: {},
        directionValue2: {
            display: "flex",
            fontSize: 18,
            // backgroundColor:"green",

            width: "32px",
            height: "32px",
            alignItems: "center",
            justifyContent: "space-around",

        },
        directionValue3: {},
        directionValue4: {},
    }))


export const CompanyCard3 = ({G, item, name , idCard, playerID, children, moves, ctx,setItems}) => {

    const classes = useStyles(item);
    const [value, setValue] = useState(G.companyDeck[idCard-1].actualValue);

// console.log({idCard});




    // let topCard = G.find((item)=> item.id === 1)
    // console.log(topCard.actualValue)


    // const [{ isDragging }, drag] = useDrag(
    //   {
    //     item: {type: "color"},
    //
    //     collect: (monitor) => ({
    //       isDragging: monitor.isDragging()
    //     })
    //   }
    //
    // );
    const ref = useRef(null);

    const [, drop] = useDrop(
    // ()=>(
        {
        accept: 'bid',
            drop(_item){

                // if (value!=G.companyDeck[idCard-1].actualValue){
                //     setValue(G.companyDeck[idCard-1].actualValue)
                // }
                moves.IncreaseCoin(name,idCard);

                    // setValue(G.companyDeck[idCard-1].actualValue)
                setValue(value+1)
                    console.log(G.companyDeck[idCard-1].actualValue);

                // setItems(G.companyDeck);


            },


        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver(),

        }),
    }
    // ),[setItems],
    //
    );


    // const [{isDragging}, drag] = useDrag({
    //     item: { type: 'companyCard'},
    //
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // });

    // const opacity = isDragging ? 0 : 1;


    //   const containerStyle = useMemo(
    //   () => ({
    //     opacity: isDragging ? 0.4 : 1,
    //
    //   }),
    //   [isDragging]
    // );


    const cardDirectionClass = (item, moves) => {

        if (item.direction === 2) {

            return (
                <Box display={"flex"} justifyContent={"space-between"} width={"105px"} paddingTop={"80px"}
                     paddingLeft={"7px"}>
                    <CoinCarbon item={item}/>
                    <Coin moves={moves} setValue={setValue} setItems={setItems} G={G} ctx={ctx} value={value} name={name} item={item} idCard={idCard}/>
                    {children}
                </Box>
            );
        }
        if (item.direction === 1) {
            return (
                <Box display={"flex"} justifyContent={"space-between"} width={"105px"} paddingTop={"80px"}
                     paddingLeft={"7px"}>
                    <Coin moves={moves} setValue={setValue} setItems={setItems} G={G} ctx={ctx} value={value} name={name} item={item} idCard={idCard}/>
                    <CoinCarbon item={item}/>
                    {children}
                </Box>
            );
        }
        if (item.direction === 3) {

            return (
                <Box display={"flex"} justifyContent={"space-between"} width={"106px"} paddingTop={"6px"}
                     paddingLeft={"7px"}>
                    <CoinCarbon item={item}/>
                    <Coin moves={moves} setValue={setValue} setItems={setItems} G={G} ctx={ctx} value={value} name={name} item={item} idCard={idCard}/>
                    {children}


                </Box>
            );
        }
        if (item.direction === 4) {

            return (
                <Box display={"flex"} justifyContent={"space-between"} width={"106px"} paddingTop={"6px"}
                     paddingLeft={"7px"}>
                    <Coin moves={moves} setValue={setValue} G={G} setItems={setItems} ctx={ctx} value={value} name={name} item={item} idCard={idCard}/>
                    <CoinCarbon item={item}/>
                    {children}
                </Box>
            );
        }
    }
    drop(ref);
    return (
        <div ref={ref}>
            <Box className={`${classes.mainSection}`}>
                <Box className={`${classes.backImage}`}>
                    {cardDirectionClass(item, moves)}
                    {children}
                </Box>
            </Box>
            {children}
        </div>

    );
};
