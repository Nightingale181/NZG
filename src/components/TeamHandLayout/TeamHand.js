import React, {useEffect, useRef, useState} from 'react';
import {DndProvider, useDrag, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import '../../styles/App.css';
import {CELL_NAMES} from "./TeamCellNames";
import {Box, Typography} from '@material-ui/core'
import CompanyCard from "../CompanyCard";
import TeamCard from "../TeamCard";
import {teamDeck} from "../../constants/teamDeck";
import {makeStyles} from "@material-ui/core/styles";
import {carbonDeck} from "../../constants/carbonDeck";

const useStyles = makeStyles(theme => ({
    bankFlex: {
        width: 120,
        height: 120,
        backgroundColor: "white",
        borderRadius: 10,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/avatars/Avatar_HR.svg"})`,
        // ${process.env.PUBLIC_URL + '/img/company/cc12.png'}/
        // position:"absolute",
        alignContent: "center",
        // margin:"0 auto",
        zIndex: 0,

        // border: '1px solid #a49f9f',
    },
    companyBankFlex:{
        display: "flex",
        width: "480px",
        justifyContent: "space-around",
        marginLeft:"-60px",
        marginTop:"180px",
        marginBottom:"60px",

    },
}))





const MovableItem = ({name, index, currentCellName, moveCardHandler, setItems, G, playerID, item}) => {
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
        accept: 'companyCard',
        // hover(item: any, monitor) {
        //     if (!ref.current) {
        //         return;
        //     }
        //     const dragIndex = item.index;
        //     const hoverIndex = index;
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
        //     // Note: we're mutating the monitor item here!
        //     // Generally it's better to avoid mutations,
        //     // but it's good here for the sake of performance
        //     // to avoid expensive public searches.
        //     item.index = hoverIndex;
        // },
    });

    const [{isDragging}, drag] = useDrag({
        item: {index, name, currentCellName, type: 'companyCard'},
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

const Cell = ({children, className, title, G, ctx, ID}) => {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: 'companyCard',
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


export const TeamHand = ({G, ctx, ID}) => {

    const [items, setItems] = useState(teamDeck);
    const classes = useStyles(carbonDeck);
    const isMobile = window.innerWidth < 600;

    // const card = G.players[0].handCompanyDeck[2];

    const moveCardHandler = (dragIndex, hoverIndex) => {

        const dragItem = items[dragIndex];

        if (dragItem) {
            setItems((prevState => {
                const copiedStateArray = [...prevState];

                // remove item by "hoverIndex" and put "dragItem" instead
                const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);

                // remove item by "dragIndex" and put "prevItem" instead
                copiedStateArray.splice(dragIndex, 1, prevItem[0]);

                return copiedStateArray;
            }));
        }
    };

    const returnItemsForCell = (cellName) => {
        return items.filter((item) => item.cell === cellName).map((item, index, G) => (
            <MovableItem key={item.id}
                         name={item.name}
                         currentCellName={item.cell}
                         setItems={setItems}
                         index={index}
                         moveCardHandler={moveCardHandler}
                         G={G}
                         item={item}
                         playerID={ID}
            />
        ))
    };

    const {
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
    } = CELL_NAMES;
    const mapBank = () =>{

        let cellId;
        let bankId = ["j"];
        let cellsList = [];
        for (let i=0; i <12 ; i++){
            cellId = bankId[0].concat(i);
            cellsList.push(
                <Cell title={cellId} className={"cellColumn"}>
                    {returnItemsForCell(cellId)}
                </Cell>
            )

        }
        return cellsList;
    }

// TODO: map handcompany into cells
    return (
        <>
            <div className={"mainTeam"}>
            <div className={"flowTeam"}>
            <div className={"cellFlow"}>
                <Cell title={f0} className='cellColumn '>
                    {returnItemsForCell(f0)}
                </Cell>
                <Cell title={f1} className='cellColumn '>
                    {returnItemsForCell(f1)}
                </Cell>
                <Cell title={f2} className='cellColumn '>
                    {returnItemsForCell(f2)}
                </Cell>
                <Cell title={f3} className='cellColumn'>
                    {returnItemsForCell(f3)}
                </Cell>
                <Cell title={f4} className='cellColumn'>
                    {returnItemsForCell(f4)}
                </Cell>
                <Cell title={f5} className='cellColumn'>
                    {returnItemsForCell(f5)}
                </Cell>
                <Cell title={f6} className='cellColumn'>
                    {returnItemsForCell(f6)}
                </Cell>
                <Cell title={f7} className='cellColumn'>
                    {returnItemsForCell(f7)}
                </Cell>

            </div>
                <div className={"cellFlow"}>
                    <Cell title={g0} className='cellColumn '>
                        {returnItemsForCell(g0)}
                    </Cell>
                    <Cell title={g1} className='cellColumn '>
                        {returnItemsForCell(g1)}
                    </Cell>
                    <Cell title={g2} className='cellColumn '>
                        {returnItemsForCell(g2)}
                    </Cell>
                    <Cell title={g3} className='cellColumn'>
                        {returnItemsForCell(g3)}
                    </Cell>
                    <Cell title={g4} className='cellColumn'>
                        {returnItemsForCell(g4)}
                    </Cell>
                    <Cell title={g5} className='cellColumn'>
                        {returnItemsForCell(g5)}
                    </Cell>
                    <Cell title={g6} className='cellColumn'>
                        {returnItemsForCell(g6)}
                    </Cell>
                    <Cell title={g7} className='cellColumn'>
                        {returnItemsForCell(g7)}
                    </Cell>

                </div>
            </div>
            <div>
                <Cell title={e0} className='cellColumn eventTeamCell'>
                    {returnItemsForCell(e0)}
                </Cell>
            </div>
                <div className={classes.companyBankFlex}>
                    <div className={classes.bankFlex}>

                    </div>
                    <div className={"teamBank"}>
                        {mapBank()}
                    </div>
                </div>
            <div className={"flowTeam"}>
                <div className={"cellFlow  lowerTeam"}>
                    <Cell title={h0} className='cellColumn '>
                        {returnItemsForCell(h0)}
                    </Cell>
                    <Cell title={h1} className='cellColumn '>
                        {returnItemsForCell(h1)}
                    </Cell>
                    <Cell title={h2} className='cellColumn '>
                        {returnItemsForCell(h2)}
                    </Cell>
                    <Cell title={h3} className='cellColumn'>
                        {returnItemsForCell(h3)}
                    </Cell>
                    <Cell title={h4} className='cellColumn'>
                        {returnItemsForCell(h4)}
                    </Cell>
                    <Cell title={h5} className='cellColumn'>
                        {returnItemsForCell(h5)}
                    </Cell>
                    <Cell title={h6} className='cellColumn'>
                        {returnItemsForCell(h6)}
                    </Cell>
                    <Cell title={h7} className='cellColumn'>
                        {returnItemsForCell(h7)}
                    </Cell>

                </div>
                <div className={"cellFlow lowerTeam"}>
                    <Cell title={i0} className='cellColumn '>
                        {returnItemsForCell(i0)}
                    </Cell>
                    <Cell title={i1} className='cellColumn '>
                        {returnItemsForCell(i1)}
                    </Cell>
                    <Cell title={i2} className='cellColumn '>
                        {returnItemsForCell(i2)}
                    </Cell>
                    <Cell title={i3} className='cellColumn'>
                        {returnItemsForCell(i3)}
                    </Cell>
                    <Cell title={i4} className='cellColumn'>
                        {returnItemsForCell(i4)}
                    </Cell>
                    <Cell title={i5} className='cellColumn'>
                        {returnItemsForCell(i5)}
                    </Cell>
                    <Cell title={i6} className='cellColumn'>
                        {returnItemsForCell(i6)}
                    </Cell>
                    <Cell title={i7} className='cellColumn'>
                        {returnItemsForCell(i7)}
                    </Cell>

                </div>
            </div>
            </div>

        </>
    );
}