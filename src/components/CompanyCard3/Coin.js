import React, {useState, useCallback, useMemo, memo, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import '../../styles/App.css';
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


 const Coin=({ color,name,idCard,setValue,setItems,value, children,item,moves,G,ctx })=> {

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
    const classes = useStyles();

    const [, drop] = useDrop({
        accept: 'bid',

    });

    const [{isDragging}, drag] = useDrag({
        item: {idCard,name,type: 'bid'},
        end: ( ) => {

            // moves.InitialDraw();
            // if (value!=G.companyDeck[idCard-1].actualValue){
            //     setValue(G.companyDeck[idCard-1].actualValue)
            // }
                moves.DecreaseCoin(name,idCard);
            // setItems(G.companyDeck);

            //

                setValue(G.companyDeck[idCard-1].actualValue)
            setValue(value-1)
                console.log(G.companyDeck[idCard-1].actualValue);

        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;



    const containerStyle = useMemo(
        () => ({
            opacity: isDragging ? 0.4 : 1,

        }),
        [isDragging]
    );
    drag(drop(ref))
    return (
        <div ref={ref} >
            <Box className={`${classes.mainSection} + " " + mainFont`}>

                {value}


            </Box>
            {children}
        </div>
    );
};

 export default Coin;