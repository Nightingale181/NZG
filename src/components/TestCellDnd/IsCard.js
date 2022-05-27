// import CompanyCard from "../CompanyCard";
// import {Square} from "./Square";
// export const IsCard = ({ G,item,isCard,key }) => isCard ? null : <CompanyCard G={G} item={item} key={key}/>


import { useState, useCallback, useMemo, memo } from "react";
import { useDrag } from "react-dnd";
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
export const SourceBox = memo(function SourceBox({item,children}) {

    const classes = useStyles();

    const [, drag] = useDrag(
        () => ({
            type: "coinMoney",

            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        })
    );
    return (
        <div ref={drag} className={`${classes.mainSection} + " " + mainFont greyFont `} >
            {3}
            {children}
        </div>
    );
});
