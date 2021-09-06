import React, { useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import './assets/styles/App.css';
import { COLUMN_NAMES } from "./constants";
import { tasks } from "./tasks";
import CompanyCard from "../CompanyCard";

const MovableItem = ({name, index, currentColumnName, moveCardHandler, setItems,G,playerID,item}) => {
    const changeItemColumn = (currentItem, columnName) => {
        setItems((prevState) => {
            return prevState.map(e => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName : e.column,
                }
            })
        });
    }

    // console.log(ID);

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: 'Our first type',
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
        item: {index, name, currentColumnName, type: 'Our first type'},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();

            if (dropResult) {
                const {name} = dropResult;
                const {oneC, twoC, threeC, fourC,fiveC,sixC,sevenC,eightC,nineC,tenC} = COLUMN_NAMES;
                switch (name) {
                    case twoC:
                        changeItemColumn(item, twoC);
                        break;
                    case threeC:
                        changeItemColumn(item, threeC);
                        break;
                    case fourC:
                        changeItemColumn(item, fourC);
                        break;
                    case oneC:
                        changeItemColumn(item,oneC );
                        break;
                    case fiveC:
                        changeItemColumn(item,fiveC );
                        break;
                    case sixC:
                        changeItemColumn(item,sixC );
                        break;
                    case sevenC:
                        changeItemColumn(item,sevenC );
                        break;
                    case eightC:
                        changeItemColumn(item,eightC );
                        break;
                    case nineC:
                        changeItemColumn(item,nineC );
                        break;
                    case tenC:
                        changeItemColumn(item,tenC );
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
            <CompanyCard  G={G} item={item} playerID={playerID}/>
        </div>
    )
}

const Column = ({children, className, title,G,ctx,ID}) => {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: 'Our first type',
        drop: () => ({name: title}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        // Override monitor.canDrop() function
        // canDrop: (item: any) => {
        //     const {DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE} = COLUMN_NAMES;
        //     const {currentColumnName} = item;
        //     return (currentColumnName === title) ||
        //         (currentColumnName === DO_IT && title === IN_PROGRESS) ||
        //         (currentColumnName === IN_PROGRESS && (title === DO_IT || title === AWAITING_REVIEW)) ||
        //         (currentColumnName === AWAITING_REVIEW && (title === IN_PROGRESS || title === DONE)) ||
        //         (currentColumnName === DONE && (title === AWAITING_REVIEW));
        // },
    });

    // const getBackgroundColor = () => {
    // if (isOver) {
    //     if (canDrop) {
    //         return 'rgb(188,251,255)'
    //     } else if (!canDrop) {
    //         return 'rgb(255,188,188)'
    //     }
    // } else {
    //     return '';
    // }
    // };

    return (
        <div ref={drop} className={className}>
            {/* <p>{title}</p> */}
            {children}
        </div>
    )
}
// const [items, setItems] = useState(tasks);

export const PlayerHand = ({G,ctx,ID}) => {
console.log(ID);
    const [items, setItems] = useState(tasks);

    const isMobile = window.innerWidth < 600;

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

    const returnItemsForColumn = (columnName) => {
        return items
            .filter((item) => item.column === columnName)
            .map((item, index) => (
                <MovableItem key={item.id}
                             name={item.name}
                             currentColumnName={item.column}
                             setItems={setItems}
                             index={index}
                             moveCardHandler={moveCardHandler}
                             G={G}
                             item = {G.companyDeck[0]}
                             playerID={ID}
                />
            ))
    };

    const {oneC, twoC, threeC, fourC,fiveC,sixC,sevenC,eightC,nineC,tenC} = COLUMN_NAMES;

    return (
        <div className="container">
            <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                <Column title={oneC} className='column do-it-column'>
                    {returnItemsForColumn(oneC)}
                </Column>
                <Column title={twoC} className='column in-progress-column'>
                    {returnItemsForColumn(twoC)}
                </Column>
                <Column title={threeC} className='column awaiting-review-column'>
                    {returnItemsForColumn(threeC)}
                </Column>
                <Column title={fourC} className='column done-column'>
                    {returnItemsForColumn(fourC)}
                </Column>
                <Column title={fiveC} className='column done-column'>
                    {returnItemsForColumn(fiveC)}
                </Column>
                <Column title={sixC} className='column done-column'>
                    {returnItemsForColumn(sixC)}
                </Column>
                <Column title={sevenC} className='column done-column'>
                    {returnItemsForColumn(sevenC)}
                </Column>
                <Column title={eightC} className='column done-column'>
                    {returnItemsForColumn(eightC)}
                </Column>
                <Column title={nineC} className='column done-column'>
                    {returnItemsForColumn(nineC)}
                </Column>
                <Column title={tenC} className='column done-column'>
                    {returnItemsForColumn(tenC)}
                </Column>
            </DndProvider>
        </div>
    );
}
