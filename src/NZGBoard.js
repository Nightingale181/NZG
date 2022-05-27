import React, { useCallback, useRef, useState } from 'react';
import CompanyCard from "./components/CompanyCard";
import {Box,Typography,Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {currentId} from "./Game";
import { DndProvider } from 'react-dnd'

import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import {companyDeck} from "./constants/companyDeck";
import CompanyStack from "./components/CompanyStack";
import NamePlate from "./components/NamePlate";
import {number} from "prop-types";
import {DragItem} from "./components/DragItem";
import {Card} from "./components/Card";
import CarbonEventCard from "./components/CarbonEventCard";
import {CarbonEvent2} from "./components/CarbonEventCard2";
import TeamCard from "./components/TeamCard";
import CompanyHand from "./components/CompanyHand";
import Doit from "./components/Doit";
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
} from "react-grid-dnd";
import {Board} from "./components/TestCellDnd/Board";
import {PlayerHand} from "./components/CompanyHandLayout/PlayerHand";





const useStyles = makeStyles((theme) => ({

    bid:{
        backgroundColor: "green",
        border: "5px solid white",
        zIndex:2,
    },
    background:{
        height:"1200px",
        width:"1980px",
        margin:90,
        backgroundImage:`url(${process.env.PUBLIC_URL + '/img/mat_clean.svg'})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',

        display: 'block',

    },
    auction:{
        textAlign:"center",
        marginTop:"20%",
        fontSize:40,
    },
}));

export const NZGBoard = ({G,ctx,...props }) => {

    const classes = useStyles();
    const isMobile = window.innerWidth < 600;


    // const onDraw = useCallback(() => {
    //     // moves.InitialDraw();
    //      // setPlayerId1(ctx.currentPlayer);
    //      console.log(playerId1);
    //
    //      if (ctx.currentPlayer.toString() === "0")
    //      {
    //         setPlayerId1(ctx.currentPlayer);
    //
    //     } if (ctx.currentPlayer.toString() === "1")
    //     {
    //         setPlayerId2(ctx.currentPlayer);
    //
    //     } if ( ctx.currentPlayer.toString() === "2")
    //     {
    //         setPlayerId3(ctx.currentPlayer);
    //     }if ( ctx.currentPlayer.toString() === "3")
    //     {
    //         setPlayerId4(ctx.currentPlayer);
    //     // moves,setHidden1,hidden1,hidden2,hidden3,hidden4,cardId1,cardId2,cardId3,cardId4,playerId1,playerId2,playerId3,playerId4,ctx,G,actualCard1,actualCard2,actualCard3,actualCard4
    //     }
    //
    // }, [moves,G,ctx,playerId1,playerId2,playerId3,playerId4]);

    // function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    //     if (targetId) {
    //         const result = move(
    //             items[sourceId],
    //             items[targetId],
    //             sourceIndex,
    //             targetIndex
    //         );
    //         return setItems({
    //             ...items,
    //             [sourceId]: result[0],
    //             [targetId]: result[1]
    //         });
    //     }
    //
    //     const result = swap(items[sourceId], sourceIndex, targetIndex);
    //     return setItems({
    //         ...items,
    //         [sourceId]: result
    //     });
    // }

    return(
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>

        <div className={classes.background}>
                {/*        <Box     width={"100%"} >*/}
                {/*    <Box display={"flex"} justifyContent={"space-between"} width={"100%"} >*/}
                {/*        <NamePlate G={G} playerId={0} />*/}
                {/*        <NamePlate G={G} playerId={1} />*/}
                {/*    </Box>*/}
                {/*    /!*{*!/*/}
                {/*    /!*    (playerId1.toString()) >= "0"  ? <CompanyStack G={G} playerId={playerId1} ctx={ctx} moves={moves} />  : null*!/*/}
                {/*    /!*}*!/*/}

                {/*    /!*{*!/*/}
                {/*    /!*    (playerId2.toString()) >= "1"  ? <CompanyStack G={G} playerId={playerId2} ctx={ctx} moves={moves} />  : null*!/*/}
                {/*    /!*}*!/*/}
                {/*    <Box display={"flex"} justifyContent={"space-between"}>*/}
                {/*        <CompanyHand G={G} playerId={0} ctx={ctx} moves={moves}/>*/}
                {/*        <CompanyHand G={G} playerId={1} ctx={ctx} moves={moves}/>*/}
                {/*    </Box>*/}
                {/*    <Box display={"flex"} justifyContent={"space-around"}>*/}
                {/*        <CarbonEvent2 G={G} ctx={ctx} />*/}

                {/*        <TeamCard />*/}

                {/*    </Box>*/}

                {/*        <Box  position={"fixed"} marginTop={40} borderRadius={50} width={240} height={170} className={classes.bid} marginLeft={"40%"}>*/}
                {/*        <Typography className={classes.auction}>Auction</Typography>*/}
                {/*        </Box>*/}




                {/*</Box>*/}


                {/*<Box display={"flex"} justifyContent={"space-between"} width={"1505px"} marginTop={16} >*/}
                {/*    <CompanyHand G={G} playerId={2} ctx={ctx} moves={moves}/>*/}
                {/*    <CompanyHand G={G} playerId={3} ctx={ctx} moves={moves}/>*/}
                {/*    </Box>*/}
                {/*    <Box marginTop={3} display={"flex"} justifyContent={"space-between"} width={"100%"}>*/}
                {/*        <NamePlate G={G} playerId={2} />*/}
                {/*        <NamePlate G={G} playerId={3} />*/}
                {/*    </Box>*/}

            {/*<DragItem/>*/}




            <Card G={G} ctx={ctx} moves={props.moves}/>

            {/* <TestBoardDnd G={G}/> */}
            {/*<Board G={G}/>*/}
            {/*<PlayerHand G={G}/>*/}

    </div>
     </DndProvider>

    )
};
