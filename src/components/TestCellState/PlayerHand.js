import React, {useEffect, useRef, useState} from 'react';
import {DndProvider, useDrag, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import '../../styles/App.css';
import {CELL_NAMES} from "./companyCellNames";
import {cardIds} from "./cardIds";
import CompanyCard from "../CompanyCard";
import CarbonEventCard from "../CarbonEventCard";
import TeamCard from "../TeamCard";
import {companyDeck} from "../../constants/companyDeck";


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
        hover(item: any, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCardHandler(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    const [{isDragging}, drag] = useDrag({
        item: {index, name, currentCellName, type: 'companyCard'},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();

            if (dropResult) {
                const {name} = dropResult;
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
                    d0
                } = CELL_NAMES;
                switch (name) {
                    case a1:
                        changeItemCell(item, a1);
                        break;
                    case a2:
                        changeItemCell(item, a2);
                        break;
                    case a3:
                        changeItemCell(item, a3);
                        break;
                    case a4:
                        changeItemCell(item, a4);
                        break;
                    case a5:
                        changeItemCell(item, a5);
                        break;
                    case a6:
                        changeItemCell(item, a6);
                        break;
                    case a7:
                        changeItemCell(item, a7);
                        break;
                    case a8:
                        changeItemCell(item, a8);
                        break;
                    case a9:
                        changeItemCell(item, a9);
                        break;
                    case a0:
                        changeItemCell(item, a0);
                        break;
                    case b1:
                        changeItemCell(item, b1);
                        break;
                    case b2:
                        changeItemCell(item, b2);
                        break;
                    case b3:
                        changeItemCell(item, b3);
                        break;
                    case b4:
                        changeItemCell(item, b4);
                        break;
                    case b5:
                        changeItemCell(item, b5);
                        break;
                    case b6:
                        changeItemCell(item, b6);
                        break;
                    case b7:
                        changeItemCell(item, b7);
                        break;
                    case b8:
                        changeItemCell(item, b8);
                        break;
                    case b9:
                        changeItemCell(item, b9);
                        break;
                    case b0:
                        changeItemCell(item, b0);
                        break;
                    case c1:
                        changeItemCell(item, c1);
                        break;
                    case c2:
                        changeItemCell(item, c2);
                        break;
                    case c3:
                        changeItemCell(item, c3);
                        break;
                    case c4:
                        changeItemCell(item, c4);
                        break;
                    case c5:
                        changeItemCell(item, c5);
                        break;
                    case c6:
                        changeItemCell(item, c6);
                        break;
                    case c7:
                        changeItemCell(item, c7);
                        break;
                    case c8:
                        changeItemCell(item, c8);
                        break;
                    case c9:
                        changeItemCell(item, c9);
                        break;
                    case c0:
                        changeItemCell(item, c0);
                        break;
                    case d1:
                        changeItemCell(item, d1);
                        break;
                    case d2:
                        changeItemCell(item, d2);
                        break;
                    case d3:
                        changeItemCell(item, d3);
                        break;
                    case d4:
                        changeItemCell(item, d4);
                        break;
                    case d5:
                        changeItemCell(item, d5);
                        break;
                    case d6:
                        changeItemCell(item, d6);
                        break;
                    case d7:
                        changeItemCell(item, d7);
                        break;
                    case d8:
                        changeItemCell(item, d8);
                        break;
                    case d9:
                        changeItemCell(item, d9);
                        break;
                    case d0:
                        changeItemCell(item, d0);
                        break;
                    default:
                        break;
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
            <CompanyCard G={G} item={item} playerID={playerID}/>
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


export const PlayerHand = ({G, ctx, ID}) => {

    const [items, setItems] = useState(companyDeck);

    const isMobile = window.innerWidth < 600;

    const card = G.players[0].handCompanyDeck[2];

    const moveCardHandler = (dragIndex, hoverIndex) => {

        const dragItem = items[dragIndex];

        if (dragItem) {
            setItems((prevState => {
                const coppiedStateArray = [...prevState];

                // remove item by "hoverIndex" and put "dragItem" instead
                const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

                // remove item by "dragIndex" and put "prevItem" instead
                coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

                return coppiedStateArray;
            }));
        }
    };

    const returnItemsForCell = (cellName) => {
        return items.filter((item) => item.cell === cellName).map((item, index,G) => (
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
        d0
    } = CELL_NAMES;
// TODO: map handcompany into cells
    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
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
                            {returnItemsForCell(a2)}
                        </Cell>
                        <Cell title={a3} className='column'>
                            {returnItemsForCell(a3)}
                        </Cell>
                        <Cell title={a4} className='column'>
                            {returnItemsForCell(a4)}
                        </Cell>
                        <Cell title={a5} className='column'>
                            {returnItemsForCell(a5)}
                        </Cell>
                        <Cell title={a6} className='column'>
                            {returnItemsForCell(a6)}
                        </Cell>
                        <Cell title={a7} className='column'>
                            {returnItemsForCell(a7)}
                        </Cell>
                        <Cell title={a8} className='column'>
                            {returnItemsForCell(a8)}
                        </Cell>
                        <Cell title={a9} className='column'>
                            {returnItemsForCell(a9)}
                        </Cell>
                    </div>
                    <div className={"eventCard"}>
                        <CarbonEventCard/>
                        <TeamCard/>
                    </div>
                    <div className="container">
                        <Cell title={b0} className='column'>
                            {returnItemsForCell(b0)}
                        </Cell>
                        <Cell title={b1} className='column'>
                            {returnItemsForCell(b1)}
                        </Cell>
                        <Cell title={b2} className='column'>
                            {returnItemsForCell(b2)}
                        </Cell>
                        <Cell title={b3} className='column'>
                            {returnItemsForCell(b3)}
                        </Cell>
                        <Cell title={b4} className='column'>
                            {returnItemsForCell(b4)}
                        </Cell>
                        <Cell title={b5} className='column'>
                            {returnItemsForCell(b5)}
                        </Cell>
                        <Cell title={b6} className='column'>
                            {returnItemsForCell(b6)}
                        </Cell>
                        <Cell title={b7} className='column'>
                            {returnItemsForCell(b7)}
                        </Cell>
                        <Cell title={b8} className='column'>
                            {returnItemsForCell(b8)}
                        </Cell>
                        <Cell title={b9} className='column'>
                            {returnItemsForCell(b9)}
                        </Cell>
                    </div>
                </div>
            </div>
            <div className={"companyBlock lower"}>
                <div className={"companyFlex"}>
                    <div className="container">
                        <Cell title={c0} className='column '>
                            {returnItemsForCell(c0)}
                        </Cell>
                        <Cell title={c1} className='column '>
                            {returnItemsForCell(c1)}
                        </Cell>
                        <Cell title={c2} className='column '>
                            {returnItemsForCell(c2)}
                        </Cell>
                        <Cell title={c3} className='column'>
                            {returnItemsForCell(c3)}
                        </Cell>
                        <Cell title={c4} className='column'>
                            {returnItemsForCell(c4)}
                        </Cell>
                        <Cell title={c5} className='column'>
                            {returnItemsForCell(c5)}
                        </Cell>
                        <Cell title={c6} className='column'>
                            {returnItemsForCell(c6)}
                        </Cell>
                        <Cell title={c7} className='column'>
                            {returnItemsForCell(c7)}
                        </Cell>
                        <Cell title={c8} className='column'>
                            {returnItemsForCell(c8)}
                        </Cell>
                        <Cell title={c9} className='column'>
                            {returnItemsForCell(c9)}
                        </Cell>
                    </div>
                    <div className="container">
                        <Cell title={d0} className='column '>
                            {returnItemsForCell(d0)}
                        </Cell>
                        <Cell title={d1} className='column '>
                            {returnItemsForCell(d1)}
                        </Cell>
                        <Cell title={d2} className='column '>
                            {returnItemsForCell(d2)}
                        </Cell>
                        <Cell title={d3} className='column'>
                            {returnItemsForCell(d3)}
                        </Cell>
                        <Cell title={d4} className='column'>
                            {returnItemsForCell(d4)}
                        </Cell>
                        <Cell title={d5} className='column'>
                            {returnItemsForCell(d5)}
                        </Cell>
                        <Cell title={d6} className='column'>
                            {returnItemsForCell(d6)}
                        </Cell>
                        <Cell title={d7} className='column'>
                            {returnItemsForCell(d7)}
                        </Cell>
                        <Cell title={d8} className='column'>
                            {returnItemsForCell(d8)}
                        </Cell>
                        <Cell title={d9} className='column'>
                            {returnItemsForCell(d9)}
                        </Cell>
                    </div>
                </div>
            </div>


        </DndProvider>
    );
}
