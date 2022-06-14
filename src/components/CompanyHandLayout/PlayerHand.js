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
import {TeamHand} from "../TeamHandLayout/TeamHand";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from '@material-ui/core'
import {carbonDeck} from "../../constants/carbonDeck";
import {Game} from "../../Game";

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
        width: "1200px",
        justifyContent: "space-around",
        marginLeft: "600px",
        marginTop: "60px",

    },
}))


const MovableItem = ({name,idCard, index, currentCellName, moveCardHandler, setItems, G, playerID, item,items, ctx, moves}) => {
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
                let playerId = ["a", "b", "c", "d", "k", "h"];
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

    const onUpdate = () =>{



        // if (items !== G.companyDeck) {
        //     setItems(G.companyDeck)
        //
        // }

    }

    // const opacity = isDragging ? 0 : 1;
    //


    drag(drop(ref));




    return (
        <div ref={ref}>
            <CompanyCard3 setItems={setItems} ctx={ctx} G={G} item={item} name={name} idCard={idCard} playerID={playerID} moves={moves}/>

        </div>
    )

}

const Cell = ({children, className, name, title, G, ctx, ID}) => {
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
    const [testUpdate,setTest]=useState(0)
    console.log(testUpdate);
    //TODO: this stops the board from update. Change to move cards. Needs to be fixed

    // if (items != G.companyDeck){
    //     setItems(G.companyDeck)
    // }


    // console.log(items);
    const classes = useStyles(carbonDeck);
    // G.companyDeck[1].cell = CELL_NAMES.b6

    const isMobile = window.innerWidth < 600;

    const card = G.players[0].handCompanyDeck[2];

    const moveCardHandler = (dragIndex, hoverIndex, G) => {

        const dragItem = items[dragIndex];
        // console.log(items);
        if (dragItem) {

            // moves.InitialDraw();

            setItems((prevState => {
                const copiedStateArray = [...prevState];

                // remove item by "hoverIndex" and put "dragItem" instead
                const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);

                // remove item by "dragIndex" and put "prevItem" instead
                copiedStateArray.splice(dragIndex, 1, prevItem[0]);
                // setItems(G.companyDeck);
                return copiedStateArray;
            }));
        }
    };

    const returnItemsForCell = (cellName) => {
        //
        // if (items != G.companyDeck){
        //     setItems(G.companyDeck)
        // }
        // console.log(items);
        return items.filter((item) => item.cell === cellName).map((item, index) => (
            <MovableItem idCard={item.idValue}
                         name={item.name}
                         currentCellName={item.cell}
                         setItems={setItems}
                         index={index}
                         moveCardHandler={moveCardHandler}
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
        h1,
    } = CELL_NAMES;

    const mapCompanyBank = () => {
        let cellId;
        let bankId = ["k"];
        let cellsList = [];

        for (let i = 0; i < 18; i++) {
            cellId = bankId[0].concat(i);
            cellsList.push(
                <Cell title={cellId} className={"column testBorder"}>
                    {returnItemsForCell(cellId, G)}
                </Cell>
            )

        }
        return cellsList;
    }
    const bidCoinCellPlace = ({moves, children, ...props}) => {


        return (
            <div className={"bidCoinCell"}>

                <Cell className={"column"}></Cell>
                {/*<div>bid: {G.bid}</div>*/}
                {children}
            </div>
        )


    };
    const bidCell = (moves) => {
        let cellIdBid = "h1";
        return (
            <div className={"bidContainer"}>
                <Cell title={cellIdBid} className={"column testBorder"}>
                    {returnItemsForCell(cellIdBid, G)}
                </Cell>
                {bidCoinCellPlace(moves, children)}
                {/*<Cell title={cellIdBid} className={"cellColumn testBorder"}>*/}
                {/*    {returnItemsForCell(cellIdBid)}*/}
                {/*</Cell>*/}
                {/*<Cell title={cellIdBid} className={"column testBorder"}>*/}
                {/*    {returnItemsForCell(cellIdBid)}*/}
                {/*</Cell>*/}
                {/*<Cell title={cellIdBid} className={"column testBorder"}>*/}
                {/*    {returnItemsForCell(cellIdBid)}*/}
                {/*</Cell>*/}
            </div>

        )
    }


// TODO: map handcompany into cells
    return (
        <>
            <div className={"companyBlock"}>
                <div className={"companyFlex"}>
                    <div className="container">
                        <Cell title={a0} className='column '>
                            {returnItemsForCell(a0)}
                        </Cell>
                        <Cell title={a1} className='column '>
                            {returnItemsForCell(a1)}
                        </Cell>
                        <Cell title={a2} className='column '>
                            {returnItemsForCell(a2, G)}
                        </Cell>
                        <Cell title={a3} className='column'>
                            {returnItemsForCell(a3, G)}
                        </Cell>
                        <Cell title={a4} className='column'>
                            {returnItemsForCell(a4, G)}
                        </Cell>
                        <Cell title={a5} className='column'>
                            {returnItemsForCell(a5, G)}
                        </Cell>
                        <Cell title={a6} className='column'>
                            {returnItemsForCell(a6, G)}
                        </Cell>
                        <Cell title={a7} className='column'>
                            {returnItemsForCell(a7, G)}
                        </Cell>
                        <Cell title={a8} className='column'>
                            {returnItemsForCell(a8, G)}
                        </Cell>
                        <Cell title={a9} className='column'>
                            {returnItemsForCell(a9, G)}
                        </Cell>
                    </div>
                    <div className={"eventCard"} >
                        <CarbonEventCard setTest={setTest} moves={moves} />
                    </div>
                    <div className="container">
                        <Cell title={b0} className='column'>
                            {returnItemsForCell(b0, G)}
                        </Cell>
                        <Cell title={b1} className='column'>
                            {returnItemsForCell(b1, G)}
                        </Cell>
                        <Cell title={b2} className='column'>
                            {returnItemsForCell(b2, G)}
                        </Cell>
                        <Cell title={b3} className='column'>
                            {returnItemsForCell(b3, G)}
                        </Cell>
                        <Cell title={b4} className='column'>
                            {returnItemsForCell(b4, G)}
                        </Cell>
                        <Cell title={b5} className='column'>
                            {returnItemsForCell(b5, G)}
                        </Cell>
                        <Cell title={b6} className='column'>
                            {returnItemsForCell(b6, G)}
                        </Cell>
                        <Cell title={b7} className='column'>
                            {returnItemsForCell(b7, G)}
                        </Cell>
                        <Cell title={b8} className='column'>
                            {returnItemsForCell(b8, G)}
                        </Cell>
                        <Cell title={b9} className='column'>
                            {returnItemsForCell(b9, G)}
                        </Cell>
                    </div>
                </div>
            </div>


            <div className={classes.companyBankFlex}>
                <div className={classes.bankFlex}>

                </div>
                <div className={"companyBank"}>
                    {mapCompanyBank()}
                </div>
            </div>
            <div className={"companyBlock lower"}>
                <div className={"companyFlex"}>
                    <div className="container">
                        <Cell title={c0} className='column '>
                            {returnItemsForCell(c0, G)}
                        </Cell>
                        <Cell title={c1} className='column '>
                            {returnItemsForCell(c1, G)}
                        </Cell>
                        <Cell title={c2} className='column '>
                            {returnItemsForCell(c2, G)}
                        </Cell>
                        <Cell title={c3} className='column'>
                            {returnItemsForCell(c3, G)}
                        </Cell>
                        <Cell title={c4} className='column'>
                            {returnItemsForCell(c4, G)}
                        </Cell>
                        <Cell title={c5} className='column'>
                            {returnItemsForCell(c5, G)}
                        </Cell>
                        <Cell title={c6} className='column'>
                            {returnItemsForCell(c6, G)}
                        </Cell>
                        <Cell title={c7} className='column'>
                            {returnItemsForCell(c7, G)}
                        </Cell>
                        <Cell title={c8} className='column'>
                            {returnItemsForCell(c8, G)}
                        </Cell>
                        <Cell title={c9} className='column'>
                            {returnItemsForCell(c9, G)}
                        </Cell>
                    </div>
                    {bidCell(moves)}
                    <div className="container">
                        <Cell title={d0} className='column '>
                            {returnItemsForCell(d0, G)}
                        </Cell>
                        <Cell title={d1} className='column '>
                            {returnItemsForCell(d1, G)}
                        </Cell>
                        <Cell title={d2} className='column '>
                            {returnItemsForCell(d2, G)}
                        </Cell>
                        <Cell title={d3} className='column'>
                            {returnItemsForCell(d3, G)}
                        </Cell>
                        <Cell title={d4} className='column'>
                            {returnItemsForCell(d4, G)}
                        </Cell>
                        <Cell title={d5} className='column'>
                            {returnItemsForCell(d5, G)}
                        </Cell>
                        <Cell title={d6} className='column'>
                            {returnItemsForCell(d6, G)}
                        </Cell>
                        <Cell title={d7} className='column'>
                            {returnItemsForCell(d7, G)}
                        </Cell>
                        <Cell title={d8} className='column'>
                            {returnItemsForCell(d8, G)}
                        </Cell>
                        <Cell title={d9} className='column'>
                            {returnItemsForCell(d9, G)}
                        </Cell>
                    </div>
                </div>
            </div>
            {children}
        </>
    );
}
