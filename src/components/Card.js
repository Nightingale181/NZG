
import React, {useState} from "react";
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
} from "react-grid-dnd";
import {Box, Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import "../styles/project.css";
import NamePlate from "./NamePlate";
import CompanyHand from "./CompanyHand";
import CarbonEventCard from "./CarbonEventCard";
import TeamCard from "./TeamCard";
import {IsCard} from "./TestCellDnd/IsCard";
import {PlayerHand} from "./TestCellState/PlayerHand";

// const useStyles = makeStyles(theme => ({
//     root:{
//         width:200,
//     },
//     mainSection:   {
//         // display: "flex",
//         width: "90px",
//         height: 90 ,
//         borderRadius: 15,
//         backgroundColor:"white",
//         // border:"black",
//         marginBottom:"20px",
//         cursor:"pointer",
//     },
//
//     backImage: card =>( {
//         backgroundImage:`url(${card.synmain})`,
//         backgroundPosition: 'center',
//         backgroundSize: '86%',
//         backgroundRepeat: 'no-repeat',
//         height: '100%',
//         width: '100%',
//         display: 'block',
//         margin: 'auto',
//         // flexDirection:"column",
//
//         // marginTop: "2%",
//         // marginLeft: "3%%",
//     }),
//     valuesMain: {},
//     synergyMain: {},
//     actualValues:{
//         display:"flex",
//         justifyContent:'space-between',
//         width:"87%",
//         height:"26%",
//         marginLeft:"6%",
//         marginTop:"4%",
//         paddingTop:"6%",
//     },
//     carbonActual: {
//         backgroundColor: "black",
//         border: "3px solid grey",
//         height: "90%",
//         width: "27%",
//         borderRadius: 50,
//         marginTop:"2%",
//         // marginLeft:"6%",
//     },
//
//     carbonActualText: {
//         color: "grey",
//         fontSize: "13pt",
//         marginLeft: "28%",
//         marginTop: "-5%",
//         fontWeight:501,
//     },
//     valueActual: {
//         backgroundColor: "white",
//         border: "3px solid #539bc5",
//         height: "90%",
//         width: "27%",
//         borderRadius: 50,
//         marginTop:"2%",
//         // marginLeft: 104,
//     },
//     valueActualText: {
//         color: "black",
//         fontSize: "13pt",
//         marginLeft: "28%",
//         marginTop: "-5%",
//         fontWeight:501,
//     },
//     initialValues:{
//         display:"flex",
//         justifyContent:"space-between",
//         width:"36%",
//         height:"17%",
//         marginTop:"12%",
//         marginLeft:"57%",
//     },
//     initialCarbon: {
//         backgroundColor: "black",
//         border: "3px solid grey",
//         // height: "100%",
//         width: "34%",
//         borderRadius: 50,
//
//     },
//     initialValue: {
//         backgroundColor: "white",
//         border: "3px solid #539bc5",
//         // height: "100%",
//         width: "34%",
//         borderRadius: 50,
//
//     },
//     initialCarbonText: {
//         color: "grey",
//         fontSize: "8pt",
//         marginLeft: "23%",
//         marginTop: "-19%",
//         fontWeight:501,
//     },
//     initialValueText: {
//         color: "black",
//         fontSize: "8pt",
//         marginLeft: "23%",
//         marginTop: "-19%",
//         fontWeight:501,
//     },
//     synLeft:{
//         backgroundColor: "white",
//         border: "2px solid #539bc5",
//         height: "10%",
//         width: "10%",
//         marginTop: "-18%",
//         marginLeft: "9%",
//         borderRadius: 50,
//     },
//     synMid:{
//         backgroundColor: "white",
//         border: "2px solid #539bc5",
//         height: "10%",
//         borderRadius:50,
//         width: "10%",
//         marginTop: "-21%",
//         marginLeft: "34%",
//
//
//     },
//     synLeftText:{
//         color: "black",
//         fontSize: "6pt",
//         marginLeft: "1%",
//         marginTop: "-5%",
//         fontWeight:501,
//
//     },
//     synMidText:{
//         // fontWeight:501,
//         color: "black",
//         fontSize: "6pt",
//         marginLeft: "1%",
//         marginTop: "-5%",
//         fontWeight:501,
//
//     },
//     companyName:{
//         marginTop: "30.5%",
//         marginLeft:"8.5%",
//         fontSize:"8pt",
//
//     },
//     auction:{
//         textAlign:"center",
//         marginTop:"17%",
//         fontSize:20,
//     },
//     bid:{
//         backgroundColor: "darkgreen",
//         border: "5px solid white",
//         zIndex:0,
//     },
// }));


export const Card = ({G,ctx}) => {
    // const playerID = ["1","2","3","4"]
    console.log(G.players[0].handCompanyDeck);
    // const classes = useStyles();
    //    const [items, setItems] = React.useState({
    //     first: G.players[0].handCompanyDeck,
    //     second: G.players[1].handCompanyDeck,
    //     third: G.players[2].handCompanyDeck,
    //     fourth: G.players[3].handCompanyDeck,
    //        main:G.companyDeck,
    //        firstTeam: G.players[0].handTeamDeck,
    //        secondTeam: G.players[1].handTeamDeck,
    //        thirdTeam: G.players[2].handTeamDeck,
    //        fourthTeam: G.players[3].handTeamDeck,
    //        mainTeam:G.teamDeck,
    // });




    //  const CompanyCard = ({card,key,G}) => {
    //     const classes = useStyles(card);
    //
    //     return (
    //
    //         <Box
    //             className={`${classes.mainSection}`}
    //         >
    //
    //
    //             <Box className={`${classes.backImage}`}>
    //                 <Box zIndex={1} className={classes.actualValues}>
    //
    //
    //                     <Box className={classes.carbonActual}>
    //                         <Typography className={classes.carbonActualText}>{card.actualCarbon}</Typography>
    //                     </Box>
    //
    //
    //                     <Box className={classes.valueActual}>
    //                         <Typography className={`${classes.valueActualText} `}>{card.actualValue}</Typography>
    //                     </Box>
    //
    //
    //                 </Box>
    //                 <Box zIndex={2} className={classes.initialValues}>
    //                     <Box className={classes.initialValue}>
    //                         <Typography className={classes.initialValueText}>{card.initialValue}</Typography>
    //                     </Box>
    //                     <Box className={classes.initialCarbon}>
    //                         <Typography className={classes.initialCarbonText}>{card.initialCarbon}</Typography>
    //                     </Box>
    //                 </Box>
    //
    //
    //                 <Box className={classes.synLeft}>
    //                     <Typography className={classes.synLeftText}>+3</Typography>
    //                 </Box>
    //                 <Box className={classes.synMid}>
    //                     <Typography className={classes.synMidText}>+3</Typography>
    //                 </Box>
    //                 <Box className={classes.companyName}>{card.companyName}</Box>
    //
    //             </Box>
    //
    //         </Box>
    //
    //
    //     );
    // };




    // function onChangeCompany(sourceId, sourceIndex, targetIndex, targetId) {
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
    //     console.log(items);
    // }

// console.log(player.handCompanyDeck);


    return (
        // <GridContextProvider onChange={onChangeCompany}>
<>
    <Box paddingLeft={"60px" } paddingTop={"60px"} >
            <Box display={"flex"} justifyContent={"space-between"} width={"1980px"}  >
                <Box display={"flex"} width={"600px"}>
                    <NamePlate/>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />

                </Box>
                <Box display={"flex"}>
                    {/*<TeamCard />*/}
                    {/*/!*<TeamCard />*!/*/}
                    {/*<TeamCard />*/}
                    {/*<NamePlate/>*/}

                </Box>

                {/*<NamePlate/>*/}
                {/*<NamePlate/>*/}

                {/*<Box display={"flex"} justifyContent={"space-between"} width={185}>*/}
                {/*    <NamePlate G={G} playerId={0} />*/}

                {/*    <GridDropZone*/}
                {/*        className={"handTeam"}*/}
                {/*        id="firstTeam"*/}
                {/*        boxesPerRow={2}*/}
                {/*        rowHeight={95}*/}
                {/*    >*/}
                {/*        {items.firstTeam.map(item => (*/}
                {/*            <GridItem key={item.id}>*/}
                {/*                <TeamCard G={G} card = {item}/>*/}
                {/*            </GridItem>*/}
                {/*        ))}*/}
                {/*    </GridDropZone>*/}
                {/*</Box>*/}
                {/*<Box display={"flex"} justifyContent={"space-between"} width={185}>*/}


                {/*        <GridDropZone*/}
                {/*            className={"handTeam"}*/}
                {/*            id="secondTeam"*/}
                {/*            boxesPerRow={3}*/}
                {/*            rowHeight={95}*/}
                {/*        >*/}
                {/*            {items.secondTeam.map(item => (*/}
                {/*                <GridItem key={item.id}>*/}
                {/*                    <TeamCard G={G} card = {item}/>*/}
                {/*                </GridItem>*/}
                {/*            ))}*/}
                {/*        </GridDropZone>*/}


                {/*    <NamePlate G={G} playerId={1} />*/}
                {/*</Box>*/}
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} className={"container1"}>
                <Box width={"620px"}  display={"flex"} flexWrap={"wrap"}  justifyContent={"space-between"} >

                    <PlayerHand G={G} ctx={ctx} ID={0}/>



                </Box>

                <Box display={"flex"}>
                    <CarbonEventCard />
                        <TeamCard />
                </Box>


                <Box width={"620px"}   >
                    <PlayerHand G={G} ctx={ctx} ID={1}/>

                </Box>

                {/*<Box  >*/}
                {/*    <CarbonEventCard />*/}

                {/*</Box>*/}


                {/*<GridDropZone*/}

                {/*    className={"dropzone"}*/}
                {/*    id="second"*/}
                {/*    boxesPerRow={2}*/}
                {/*    rowHeight={95}*/}
                {/*>*/}
                {/*    {items.second.map(item => (*/}
                {/*        <GridItem key={item.id}>*/}
                {/*                    <CompanyCard card={item} key={item.id}  G={G} />*/}
                {/*        </GridItem>*/}
                {/*    ))}*/}
                {/*</GridDropZone>*/}
            </Box>


            {/*<GridDropZone*/}
            {/*    className={"mainTeamDeck"}*/}
            {/*    id = "first"*/}
            {/*    boxesPerRow={9}*/}
            {/*    rowHeight={95}*/}
            {/*>*/}
            {/*    {items.main.map(item => (*/}
            {/*            <GridItem key={item.id}>*/}
            {/*                <CompanyCard card={item} key={item.id}  G={G}/>*/}
            {/*            </GridItem>*/}
            {/*        ))}*/}

            {/*</GridDropZone>*/}






            <Box display={"flex"} justifyContent={"space-between"} className={"container1"} mt={"360px"}>
                {/*<Box className={"dropzone"}>*/}
                    {/*<GridDropZone*/}


                    {/*    id="third"*/}
                    {/*    boxesPerRow={2}*/}
                    {/*    rowHeight={95}*/}
                    {/*>*/}
                    {/*    {items.third.map(item => (*/}
                    {/*        <GridItem key={item.id}>*/}

                    {/*            <CompanyCard card={item} key={item.id}  G={G}/>*/}

                    {/*        </GridItem>*/}
                    {/*    ))}*/}
                    {/*</GridDropZone>*/}
                {/*</Box>*/}

                <Box width={"620px"}   >
                    <PlayerHand G={G} ctx={ctx} ID={2}  />
                </Box>

                <Box width={"620px"}   >
                    <PlayerHand G={G} ctx={ctx} ID={3}/>
                </Box>
                {/*<GridDropZone*/}

                {/*    className={"dropzone"}*/}
                {/*    id="fourth"*/}
                {/*    boxesPerRow={2}*/}
                {/*    rowHeight={95}*/}
                {/*>*/}
                {/*    {items.fourth.map(item => (*/}
                {/*        <GridItem key={item.id}>*/}
                {/*            <CompanyCard card={item} key={item.id}  G={G} />*/}
                {/*        </GridItem>*/}
                {/*    ))}*/}
                {/*</GridDropZone>*/}
            </Box>
    <Box display={"flex"} justifyContent={"space-between"} width={"1980px"}  >
        <Box display={"flex"} width={"1980px"}>
            <NamePlate/>
            <TeamCard />
            <TeamCard />
            <TeamCard />
        </Box>
        <Box display={"flex"}>
            {/*<TeamCard />*/}
            {/*/!*<TeamCard />*!/*/}
            {/*<TeamCard />*/}
            {/*<NamePlate/>*/}

        </Box>

        {/*<NamePlate/>*/}
        {/*<NamePlate/>*/}

        {/*<Box display={"flex"} justifyContent={"space-between"} width={185}>*/}
        {/*    <NamePlate G={G} playerId={0} />*/}

        {/*    <GridDropZone*/}
        {/*        className={"handTeam"}*/}
        {/*        id="firstTeam"*/}
        {/*        boxesPerRow={2}*/}
        {/*        rowHeight={95}*/}
        {/*    >*/}
        {/*        {items.firstTeam.map(item => (*/}
        {/*            <GridItem key={item.id}>*/}
        {/*                <TeamCard G={G} card = {item}/>*/}
        {/*            </GridItem>*/}
        {/*        ))}*/}
        {/*    </GridDropZone>*/}
        {/*</Box>*/}
        {/*<Box display={"flex"} justifyContent={"space-between"} width={185}>*/}


        {/*        <GridDropZone*/}
        {/*            className={"handTeam"}*/}
        {/*            id="secondTeam"*/}
        {/*            boxesPerRow={3}*/}
        {/*            rowHeight={95}*/}
        {/*        >*/}
        {/*            {items.secondTeam.map(item => (*/}
        {/*                <GridItem key={item.id}>*/}
        {/*                    <TeamCard G={G} card = {item}/>*/}
        {/*                </GridItem>*/}
        {/*            ))}*/}
        {/*        </GridDropZone>*/}


        {/*    <NamePlate G={G} playerId={1} />*/}
        {/*</Box>*/}
    </Box>
            {/*<Box marginTop={1} display={"flex"} justifyContent={"space-between"} width={"1525px"}>*/}
            {/*    <Box display={"flex"} justifyContent={"space-between"} width={185}>*/}
            {/*        <NamePlate G={G} playerId={2} />*/}

            {/*            <GridDropZone*/}
            {/*                className={"handTeam"}*/}
            {/*                id="thirdTeam"*/}
            {/*                boxesPerRow={3}*/}
            {/*                rowHeight={95}*/}
            {/*            >*/}
            {/*                {items.thirdTeam.map(item => (*/}
            {/*                    <GridItem key={item.id}>*/}
            {/*                        <TeamCard G={G} card = {item}/>*/}
            {/*                    </GridItem>*/}
            {/*                ))}*/}
            {/*            </GridDropZone>*/}

            {/*    </Box>*/}
            {/*    <Box display={"flex"} justifyContent={"space-between"} width={185}>*/}

            {/*            <GridDropZone*/}
            {/*                className={"handTeam handTeam1"}*/}
            {/*                id="fourthTeam"*/}
            {/*                boxesPerRow={3}*/}
            {/*                rowHeight={95}*/}
            {/*            >*/}
            {/*            {items.fourthTeam.map(item => (*/}
            {/*                <GridItem key={item.id}>*/}
            {/*                    <TeamCard G={G} card = {item}/>*/}
            {/*                </GridItem>*/}
            {/*            ))}*/}
            {/*            </GridDropZone>*/}

            {/*        <NamePlate G={G} playerId={3} />*/}
            {/*    </Box>*/}
            {/*</Box>*/}

            {/*<Box  position={"absolute"} marginTop={"-208px"} borderRadius={20} width={180} height={90} className={classes.bid} marginLeft={"45%"}>*/}
            {/*    <Typography className={classes.auction}>Auction</Typography>*/}
            {/*</Box>*/}
    </Box>
</>
        // </GridContextProvider>
    );
}



