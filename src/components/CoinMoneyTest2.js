import { useState, useCallback, useMemo, memo } from "react";
import { useDrag } from "react-dnd";
import { Colors } from "./Colors";
import {makeStyles} from "@material-ui/core/styles";
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

export const CoinMoneyTest = memo(function CoinMoneyTest({ item,children }) {

    const classes = useStyles();

    const [{isDragging}, drag] = useDrag(
        () => ({
            type: "coinMoney",

            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        })
    );
    return (
        <div ref={drag} className={`${classes.mainSection} + " " + mainFont greyFont `} >
            {item}
            {children}
        </div>
    );
});