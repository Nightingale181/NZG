import React, {useEffect, useRef, useState} from 'react';
import {DndProvider, useDrag, useDrop, DragSource, DropTarget, ConnectDragSource, ConnectDropTarget} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import '../../styles/App.css';
import {CELL_NAMES} from "./companyCellNames";
import CompanyCard from "../CompanyCard";
import {CompanyCard3} from "../CompanyCard3/SourceBox";
import CarbonEventCard from "../CarbonEventCard";
// import {SourceBox} from "../TestCellDnd/IsCard";
import {companyDeck} from "../../constants/companyDeck";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from '@material-ui/core'
import {carbonDeck} from "../../constants/carbonDeck";
import {Game} from "../../Game";
import {teamDeck} from "../../constants/teamDeck";
import TeamCard from "../TeamCard";

// const image = "../img/company/14/background-1.png"
const useStyles = makeStyles(theme => ({
    bankFlex: {
        width: 120,
        height: 120,
        backgroundColor: "white",
        borderRadius: 10,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/company/Avatar_Bank.svg"})`,
        // ${process.env.PUBLIC_URL + '/img/company/cc12.png'}/
        // position:"absolute",
        alignContent: "center",
        // margin:"0 auto",
        zIndex: 0,

        // border: '1px solid #a49f9f',
    },
    companyBankFlex: {
        display: "flex",
        width: "1620px",
        justifyContent: "space-around",
        marginLeft: "180px",
        marginTop: "60px",

    },
}))



const MovableCompanyCard = ({name,idCard, index, currentCellName, moveCardHandler,
                                setItems, G, playerID, item,items, ctx, moves}) => {


    const changeItemCell = (currentItem, cellName) => {
        setItems((prevState) => {
            return prevState.map(e => {
                return {
                    ...e,
                    cell: e.name === currentItem.name ? cellName : e.cell
                }
            })
        });
    }

    // console.log(G);

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: 'companyCard',

        // hover(item: any, monitor) {
        //     if (!ref.current) {
        //         return;
        //     }
        //     const dragIndex = item.public;
        //     const hoverIndex = public;
        //     // Don't replace items with themselves
        //     if (dragIndex === hoverIndex) {
        //         return;
        //     }
        //     // Determine rectangle on screen
        //     const hoverBoundingRect = ref.current?.getBoundingClientRect();
        //     // Get vertical middle
        //     const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        //     // Determine mouse position
        //     const clientOffset = monitor.getClientOffset();
        //     // Get pixels to the top
        //     const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        //     // Only perform the move when the mouse has crossed half of the items height
        //     // When dragging downwards, only move when the cursor is below 50%
        //     // When dragging upwards, only move when the cursor is above 50%
        //     // Dragging downwards
        //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        //         return;
        //     }
        //     // Dragging upwards
        //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        //         return;
        //     }
        //     // Time to actually perform the action
        //     moveCardHandler(dragIndex, hoverIndex);
        //     // moves.DiscardCompany(G ,ctx,2);
        //     // Note: we're mutating the monitor item here!
        //     // Generally it's better to avoid mutations,
        //     // but it's good here for the sake of performance
        //     // to avoid expensive public searches.
        //     item.public = hoverIndex;
        // },
    });

    const [{isDragging}, drag] = useDrag({
        item: {index,name,idCard, currentCellName, type: 'companyCard'},
        end: (item, monitor) => {

            const dropResult = monitor.getDropResult();
            moves.MoveCard(name,idCard);



            if (dropResult) {
                const {name} = dropResult;
                let playerId = ["a", "b", "c", "d", "k", "l"];
                let cellId;

                for (let j = 0; j < 6; j++) {
                    for (let l = 0; l < 18; l++) {
                        cellId = playerId[j].concat(l);
                        switch (name) {
                            case cellId :
                                changeItemCell(item, cellId);
                                return;
                            default:
                                break;
                        }
                    }
                }
            }
        },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });



    // const opacity = isDragging ? 0 : 1;
    //


    drag(drop(ref));




    return (
        <div ref={ref}>
            <CompanyCard3 setItems={setItems} ctx={ctx} G={G} item={item} name={name} idCard={idCard} playerID={playerID} moves={moves}/>

        </div>
    )

}
const MovableTeamCard = ({name, index, currentCellName, moveCardHandler, setItems, G,
                             playerID, item}) => {
    const changeItemCell = (currentItem, cellName) => {
        setItems((prevState) => {
            return prevState.map(e => {
                return {
                    ...e,
                    cell: e.name === currentItem.name ? cellName : e.cell
                }
            })
        });
    }

    // console.log(ID);

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: 'TeamCard',

    });

    const [{isDragging}, drag] = useDrag({
        item: {index, name, currentCellName, type: 'TeamCard'},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();

            if (dropResult) {
                const {name} = dropResult;
                let playerId = ["f", "g", "h", "i","e","j"];
                let cellId;

                for (let j = 0; j < 6; j++) {
                    for (let l = 0; l < 12; l++) {
                        cellId = playerId[j].concat(l);

                        switch (name) {
                            case cellId :
                                changeItemCell(item, cellId);
                                return;
                            default:
                                break;
                        }
                    }
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;

    drag(drop(ref));

    return (
        <div ref={ref} style={{opacity}}>
            <TeamCard G={G} item={item} playerID={playerID}/>
        </div>
    )
}

const CompanyCell = ({children, className, name, title, G, ctx, ID}) => {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: "companyCard",
        drop: () => ({name: title}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),

    });


    return (
        <div ref={drop} className={className}>
            {/* <p>{title}</p> */}
            {children}
        </div>
    )
}

const TeamCell = ({children, className, name, title, G, ctx, ID}) => {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: "TeamCard",
        drop: () => ({name: title}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            didDrop:monitor.didDrop(),
        }),

    });


    return (
        <div ref={drop} className={className}>
            {/* <p>{title}</p> */}
            {children}
        </div>
    )
}


// const bidCoinCell = ({children, title}) => {
//     const [{isOver, canDrop}, drop] = useDrop({
//         accept: 'bid' || "",
//         drop: () => ({name: title}),
//         collect: (monitor) => ({
//             isOver: monitor.isOver(),
//             canDrop: monitor.canDrop(),
//         }),
//
//     });
//
//
//     return (
//         <div ref={drop}>
//             {/* <p>{title}</p> */}
//             {children}
//         </div>
//     )
// }


export const PlayerHand = ({G, ctx, moves, ID, children}) => {

    const [items, setItems] = useState(G.companyDeck);
    const [teamCards, setTeamCards] = useState(teamDeck);
    const [testUpdate,setTest]=useState(0)
    // console.log(testUpdate);
    //TODO: this stops the board from update. Change to move cards. Needs to be fixed

    // if (items != G.companyDeck){
    //     setItems(G.companyDeck)
    // }


    // console.log(items);
    const classes = useStyles(carbonDeck);
    // G.companyDeck[1].cell = CELL_NAMES.b6

    const isMobile = window.innerWidth < 600;

    const card = G.players[0].handCompanyDeck[2];

    // const moveCardHandler = (dragIndex, hoverIndex, G) => {
    //
    //     const dragItem = items[dragIndex];
    //     // console.log(items);
    //     if (dragItem) {
    //
    //         // moves.InitialDraw();
    //
    //         setItems((prevState => {
    //             const copiedStateArray = [...prevState];
    //
    //             // remove item by "hoverIndex" and put "dragItem" instead
    //             const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);
    //
    //             // remove item by "dragIndex" and put "prevItem" instead
    //             copiedStateArray.splice(dragIndex, 1, prevItem[0]);
    //             // setItems(G.companyDeck);
    //             return copiedStateArray;
    //         }));
    //     }
    // };

    const returnItemsForCompanyCell = (cellName) => {
        //
        // if (items != G.companyDeck){
        //     setItems(G.companyDeck)
        // }
        // console.log(items);
        return items.filter((item) => item.cell === cellName).map((item, index) => (
            <MovableCompanyCard idCard={item.idValue}
                                name={item.name}
                                currentCellName={item.cell}
                                setItems={setItems}
                                index={index}
                         // moveCardHandler={moveCardHandler}
                                item={item}
                                items={items}
                                G={G}
                                playerID={ID}
                                ctx={ctx}
                                moves={moves}
            />
        ))
    };

    const {
        a1,
        a2,
        a3,
        a4,
        a5,
        a6,
        a7,
        a8,
        a9,
        a0,
        b1,
        b2,
        b3,
        b4,
        b5,
        b6,
        b7,
        b8,
        b9,
        b0,
        c1,
        c2,
        c3,
        c4,
        c5,
        c6,
        c7,
        c8,
        c9,
        c0,
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        d8,
        d9,
        d0,
        f1,
        f2,
        f3,
        f4,
        f5,
        f6,
        f7,
        f0,
        e0,
        g1,
        g2,
        g3,
        g4,
        g5,
        g6,
        g7,
        g0,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h0,
        i1,
        i2,
        i3,
        i4,
        i5,
        i6,
        i7,
        i0,
        j1,
        j2,
        j3,
        j4,
        j5,
        j6,
        j7,
        j0,
        j8,
        j9,
        j10,
        j11,
        k0,
        k1,
        k2,
        k3,
        k4,
        k5,
        k6,
        k7,
        k8,
        k9,
        k10,
        k11,
        k12,
        k13,
        k14,
        k15,
        k16,
        k17,
        k18,
        l1,
    } = CELL_NAMES;

    const returnItemsForTeamCell = (cellName) => {
        return teamCards.filter((item) => item.cell === cellName).map((item, index, G) => (
            <MovableTeamCard key={item.id}
                             name={item.name}
                             currentCellName={item.cell}
                             setItems={setTeamCards}
                             index={index}
                // moveCardHandler={moveCardHandler}
                             G={G}
                             item={item}
                             playerID={ID}
            />
        ))
    };



    const mapTeamBank = () =>{

        let cellId;
        let bankId = ["j"];
        let cellsList = [];
        for (let i=0; i <12 ; i++){
            cellId = bankId[0].concat(i);
            cellsList.push(
                <TeamCell title={cellId} className={"cellColumn"}>
                    {returnItemsForTeamCell(cellId)}
                </TeamCell>
            )

        }
        return cellsList;
    }

    const mapCompanyBank = () => {
        let cellId;
        let bankId = ["k"];
        let cellsList = [];

        for (let i = 0; i < 18; i++) {
            cellId = bankId[0].concat(i);
            cellsList.push(
                <CompanyCell title={cellId} className={"column testBorder"}>
                    {returnItemsForCompanyCell(cellId, G)}
                </CompanyCell>
            )

        }
        return cellsList;
    }
    const bidCoinCellPlace = ({moves, children, ...props}) => {


        return (
            <div className={"bidCoinCell"}>

                <CompanyCell className={"column"}></CompanyCell>
                {/*<div>bid: {G.bid}</div>*/}
                {children}
            </div>
        )


    };
    const bidCell = (moves) => {
        let cellIdBid = "l1";
        return (
            <div className={"bidContainer"}>
                <CompanyCell title={cellIdBid} className={"column testBorder"}>
                    {returnItemsForCompanyCell(cellIdBid, G)}
                </CompanyCell>
                {bidCoinCellPlace(moves, children)}
                {/*<CompanyCell title={cellIdBid} className={"cellColumn testBorder"}>*/}
                {/*    {returnItemsForCompanyCell(cellIdBid)}*/}
                {/*</CompanyCell>*/}
                {/*<CompanyCell title={cellIdBid} className={"column testBorder"}>*/}
                {/*    {returnItemsForCompanyCell(cellIdBid)}*/}
                {/*</CompanyCell>*/}
                {/*<CompanyCell title={cellIdBid} className={"column testBorder"}>*/}
                {/*    {returnItemsForCompanyCell(cellIdBid)}*/}
                {/*</CompanyCell>*/}
            </div>

        )
    }


// TODO: map handcompany into cells
    return (
        <>
            <div className={"teamBlock"}>
                <div className={"flowTeam"}>
                    <div className={"cellFlow"}>
                        <TeamCell title={f0} className='cellColumn '>
                            {returnItemsForTeamCell(f0)}
                        </TeamCell>
                        <TeamCell title={f1} className='cellColumn '>
                            {returnItemsForTeamCell(f1)}
                        </TeamCell>
                        <TeamCell title={f2} className='cellColumn '>
                            {returnItemsForTeamCell(f2)}
                        </TeamCell>
                        <TeamCell title={f3} className='cellColumn'>
                            {returnItemsForTeamCell(f3)}
                        </TeamCell>
                        <TeamCell title={f4} className='cellColumn'>
                            {returnItemsForTeamCell(f4)}
                        </TeamCell>
                        <TeamCell title={f5} className='cellColumn'>
                            {returnItemsForTeamCell(f5)}
                        </TeamCell>
                        <TeamCell title={f6} className='cellColumn'>
                            {returnItemsForTeamCell(f6)}
                        </TeamCell>
                        <TeamCell title={f7} className='cellColumn'>
                            {returnItemsForTeamCell(f7)}
                        </TeamCell>

                    </div>
                    <div className={"cellFlow"}>
                        <TeamCell title={g0} className='cellColumn '>
                            {returnItemsForTeamCell(g0)}
                        </TeamCell>
                        <TeamCell title={g1} className='cellColumn '>
                            {returnItemsForTeamCell(g1)}
                        </TeamCell>
                        <TeamCell title={g2} className='cellColumn '>
                            {returnItemsForTeamCell(g2)}
                        </TeamCell>
                        <TeamCell title={g3} className='cellColumn'>
                            {returnItemsForTeamCell(g3)}
                        </TeamCell>
                        <TeamCell title={g4} className='cellColumn'>
                            {returnItemsForTeamCell(g4)}
                        </TeamCell>
                        <TeamCell title={g5} className='cellColumn'>
                            {returnItemsForTeamCell(g5)}
                        </TeamCell>
                        <TeamCell title={g6} className='cellColumn'>
                            {returnItemsForTeamCell(g6)}
                        </TeamCell>
                        <TeamCell title={g7} className='cellColumn'>
                            {returnItemsForTeamCell(g7)}
                        </TeamCell>

                    </div>
                </div>
            </div>
            <div className={"companyBlock"}>
                <div className={"companyFlex"}>
                    <div className="container">
                        <CompanyCell title={a0} className='column '>
                            {returnItemsForCompanyCell(a0)}
                        </CompanyCell>
                        <CompanyCell title={a1} className='column '>
                            {returnItemsForCompanyCell(a1)}
                        </CompanyCell>
                        <CompanyCell title={a2} className='column '>
                            {returnItemsForCompanyCell(a2, G)}
                        </CompanyCell>
                        <CompanyCell title={a3} className='column'>
                            {returnItemsForCompanyCell(a3, G)}
                        </CompanyCell>
                        <CompanyCell title={a4} className='column'>
                            {returnItemsForCompanyCell(a4, G)}
                        </CompanyCell>
                        <CompanyCell title={a5} className='column'>
                            {returnItemsForCompanyCell(a5, G)}
                        </CompanyCell>
                        <CompanyCell title={a6} className='column'>
                            {returnItemsForCompanyCell(a6, G)}
                        </CompanyCell>
                        <CompanyCell title={a7} className='column'>
                            {returnItemsForCompanyCell(a7, G)}
                        </CompanyCell>
                        <CompanyCell title={a8} className='column'>
                            {returnItemsForCompanyCell(a8, G)}
                        </CompanyCell>
                        <CompanyCell title={a9} className='column'>
                            {returnItemsForCompanyCell(a9, G)}
                        </CompanyCell>
                    </div>
                    <div className={"eventCard"} >
                        <CarbonEventCard setTest={setTest} moves={moves}
                                         returnItemsForTeamCell={returnItemsForTeamCell} title={j11}/>

                    </div>
                    <div className="container">
                        <CompanyCell title={b0} className='column'>
                            {returnItemsForCompanyCell(b0, G)}
                        </CompanyCell>
                        <CompanyCell title={b1} className='column'>
                            {returnItemsForCompanyCell(b1, G)}
                        </CompanyCell>
                        <CompanyCell title={b2} className='column'>
                            {returnItemsForCompanyCell(b2, G)}
                        </CompanyCell>
                        <CompanyCell title={b3} className='column'>
                            {returnItemsForCompanyCell(b3, G)}
                        </CompanyCell>
                        <CompanyCell title={b4} className='column'>
                            {returnItemsForCompanyCell(b4, G)}
                        </CompanyCell>
                        <CompanyCell title={b5} className='column'>
                            {returnItemsForCompanyCell(b5, G)}
                        </CompanyCell>
                        <CompanyCell title={b6} className='column'>
                            {returnItemsForCompanyCell(b6, G)}
                        </CompanyCell>
                        <CompanyCell title={b7} className='column'>
                            {returnItemsForCompanyCell(b7, G)}
                        </CompanyCell>
                        <CompanyCell title={b8} className='column'>
                            {returnItemsForCompanyCell(b8, G)}
                        </CompanyCell>
                        <CompanyCell title={b9} className='column'>
                            {returnItemsForCompanyCell(b9, G)}
                        </CompanyCell>
                    </div>
                </div>
            </div>


            <div className={classes.companyBankFlex}>
                {/*<div className={classes.bankFlex}>*/}

                {/*</div>*/}
                <div className={"teamBank"}>
                    {mapTeamBank()}
                </div>
                <div className={"companyBank"}>
                    {mapCompanyBank()}
                </div>
            </div>
            <div className={"companyBlock lower"}>
                <div className={"companyFlex"}>
                    <div className="container">
                        <CompanyCell title={c0} className='column '>
                            {returnItemsForCompanyCell(c0, G)}
                        </CompanyCell>
                        <CompanyCell title={c1} className='column '>
                            {returnItemsForCompanyCell(c1, G)}
                        </CompanyCell>
                        <CompanyCell title={c2} className='column '>
                            {returnItemsForCompanyCell(c2, G)}
                        </CompanyCell>
                        <CompanyCell title={c3} className='column'>
                            {returnItemsForCompanyCell(c3, G)}
                        </CompanyCell>
                        <CompanyCell title={c4} className='column'>
                            {returnItemsForCompanyCell(c4, G)}
                        </CompanyCell>
                        <CompanyCell title={c5} className='column'>
                            {returnItemsForCompanyCell(c5, G)}
                        </CompanyCell>
                        <CompanyCell title={c6} className='column'>
                            {returnItemsForCompanyCell(c6, G)}
                        </CompanyCell>
                        <CompanyCell title={c7} className='column'>
                            {returnItemsForCompanyCell(c7, G)}
                        </CompanyCell>
                        <CompanyCell title={c8} className='column'>
                            {returnItemsForCompanyCell(c8, G)}
                        </CompanyCell>
                        <CompanyCell title={c9} className='column'>
                            {returnItemsForCompanyCell(c9, G)}
                        </CompanyCell>
                    </div>
                    {bidCell(moves)}
                    <div className="container">
                        <CompanyCell title={d0} className='column '>
                            {returnItemsForCompanyCell(d0, G)}
                        </CompanyCell>
                        <CompanyCell title={d1} className='column '>
                            {returnItemsForCompanyCell(d1, G)}
                        </CompanyCell>
                        <CompanyCell title={d2} className='column '>
                            {returnItemsForCompanyCell(d2, G)}
                        </CompanyCell>
                        <CompanyCell title={d3} className='column'>
                            {returnItemsForCompanyCell(d3, G)}
                        </CompanyCell>
                        <CompanyCell title={d4} className='column'>
                            {returnItemsForCompanyCell(d4, G)}
                        </CompanyCell>
                        <CompanyCell title={d5} className='column'>
                            {returnItemsForCompanyCell(d5, G)}
                        </CompanyCell>
                        <CompanyCell title={d6} className='column'>
                            {returnItemsForCompanyCell(d6, G)}
                        </CompanyCell>
                        <CompanyCell title={d7} className='column'>
                            {returnItemsForCompanyCell(d7, G)}
                        </CompanyCell>
                        <CompanyCell title={d8} className='column'>
                            {returnItemsForCompanyCell(d8, G)}
                        </CompanyCell>
                        <CompanyCell title={d9} className='column'>
                            {returnItemsForCompanyCell(d9, G)}
                        </CompanyCell>
                    </div>
                </div>
            </div>
            <div className={"teamBlock"}>
                <div className={"flowTeam"}>
                    <div className={"cellFlow"}>
                        <TeamCell title={h0} className='cellColumn '>
                            {returnItemsForTeamCell(h0)}
                        </TeamCell>
                        <TeamCell title={h1} className='cellColumn '>
                            {returnItemsForTeamCell(h1)}
                        </TeamCell>
                        <TeamCell title={h2} className='cellColumn '>
                            {returnItemsForTeamCell(h2)}
                        </TeamCell>
                        <TeamCell title={h3} className='cellColumn'>
                            {returnItemsForTeamCell(h3)}
                        </TeamCell>
                        <TeamCell title={h4} className='cellColumn'>
                            {returnItemsForTeamCell(h4)}
                        </TeamCell>
                        <TeamCell title={h5} className='cellColumn'>
                            {returnItemsForTeamCell(h5)}
                        </TeamCell>
                        <TeamCell title={h6} className='cellColumn'>
                            {returnItemsForTeamCell(h6)}
                        </TeamCell>
                        <TeamCell title={h7} className='cellColumn'>
                            {returnItemsForTeamCell(h7)}
                        </TeamCell>

                    </div>
                    <div className={"cellFlow"}>
                        <TeamCell title={i0} className='cellColumn '>
                            {returnItemsForTeamCell(i0)}
                        </TeamCell>
                        <TeamCell title={i1} className='cellColumn '>
                            {returnItemsForTeamCell(i1)}
                        </TeamCell>
                        <TeamCell title={i2} className='cellColumn '>
                            {returnItemsForTeamCell(i2)}
                        </TeamCell>
                        <TeamCell title={i3} className='cellColumn'>
                            {returnItemsForTeamCell(i3)}
                        </TeamCell>
                        <TeamCell title={i4} className='cellColumn'>
                            {returnItemsForTeamCell(i4)}
                        </TeamCell>
                        <TeamCell title={i5} className='cellColumn'>
                            {returnItemsForTeamCell(i5)}
                        </TeamCell>
                        <TeamCell title={i6} className='cellColumn'>
                            {returnItemsForTeamCell(i6)}
                        </TeamCell>
                        <TeamCell title={i7} className='cellColumn'>
                            {returnItemsForTeamCell(i7)}
                        </TeamCell>

                    </div>
                </div>

            </div>
            {children}
        </>
    );
}
