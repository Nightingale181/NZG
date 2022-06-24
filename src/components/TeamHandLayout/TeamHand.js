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

const TeamCell = ({children, className, title, G, ctx, ID}) => {
    const [{isOver, canDrop,didDrop}, drop] = useDrop({
        accept: 'TeamCard',
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


export const TeamHand = ({G, ctx, ID}) => {

    const [teamCards, setTeamCards] = useState(teamDeck);
    const classes = useStyles(carbonDeck);
    const isMobile = window.innerWidth < 600;

    // const card = G.players[0].handCompanyDeck[2];

    // const moveCardHandler = (dragIndex, hoverIndex) => {
    //
    //     const dragItem = teamCards[dragIndex];
    //
    //     if (dragItem) {
    //         setTeamCards((prevState => {
    //             const copiedStateArray = [...prevState];
    //
    //             // remove item by "hoverIndex" and put "dragItem" instead
    //             const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);
    //
    //             // remove item by "dragIndex" and put "prevItem" instead
    //             copiedStateArray.splice(dragIndex, 1, prevItem[0]);
    //
    //             return copiedStateArray;
    //         }));
    //     }
    // };

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

// TODO: map handcompany into cells
    return (
        <>
            <div className={"mainTeam"}>
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
            <div>
                <TeamCell title={e0} className='cellColumn eventTeamCell'>
                    {returnItemsForTeamCell(e0)}
                </TeamCell>
            </div>
                <div className={classes.companyBankFlex}>
                    <div className={classes.bankFlex}>

                    </div>
                    <div className={"teamBank"}>
                        {mapTeamBank()}
                    </div>
                </div>
            <div className={"flowTeam"}>
                <div className={"cellFlow  lowerTeam"}>
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
                <div className={"cellFlow lowerTeam"}>
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

        </>
    );
}