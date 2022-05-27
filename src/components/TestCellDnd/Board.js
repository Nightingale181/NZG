// import { useEffect, useState } from 'react';
// import { BoardSquare } from './BoardSquare';
// import CompanyCard from "../CompanyCard";
// import {IsCard} from "./IsCard";
// import {Square} from "./Square";
//
// /** Styling properties applied to the board element */
// const boardStyle = {
//     width: '408px',
//     height: '200px',
//     display: 'flex',
//     flexWrap: 'wrap',
// };
// /** Styling properties applied to each square element */
// const squareStyle = { width: '100%', height: '100%' };
// /**
//  * The chessboard component
//  * @param props The react props
//  */
// export const Board = ({G}) => {
//
//     let handCards = G.players[0].handCompanyDeck
//     // console.log(handCards);
//
//     let topCard;
//
//     function renderSquare() {
//
//                 return (
//                     <div >
//                         <BoardSquare G={G}/>
//                     </div>
//                 );
//     }
//
//     const squares = [];
//
//     const renderCard = (item) => {
//
//         return       <div>
//                         <BoardSquare G={G} key={item.id.toString()}  >
//                             <IsCard G={G} item={item}  isCard={!handCards.length} />
//                         </BoardSquare>
//                     </div>
//     }
//
//
//
//     for (let i = 0; i < 8; i += 1) {
//         if (!handCards.length){
//             squares.push(renderSquare());
//         } else {
//             // topCard = handCards.shift();
//             // squares.push(renderCard(topCard));
//
//
//         }
//
//
//     }
//     //[squares[3],squares[5]] = [squares[5],squares[3]]
//     // console.log(squares)
//     //
//
//     const [squaresState,setSquaresState] = useState(squares);
//     // setSquaresState()s
//     return <div style={boardStyle}>{squaresState}</div>;
// };

import React, { Component } from 'react'
import { DropTarget, DragSource } from 'react-dnd'


export const ItemTypes = {
    CATEGORY: 'category-item'
}

class CategoryTreeFork extends Component {

    componentWillReceiveProps = (nextProps) => {
        console.log("Next cat props", nextProps)
    }

    render(){

        const { connectDragSource, connectDropTarget, isDragging, isOver } = this.props
        // let { thisCat, childCat, level, dropEvent } = this.props

        return connectDragSource(
            <div className="category-tree-fork">
                <div className={`category-list-item level-`}
                     style={{
                         opacity: isDragging ? 0.5 : 1,
                         backgroundColor: isOver ? "red" : "silver",
                         height: "100px"
                     }}>
                    {/*{thisCat.name}*/}
                </div>
            </div>
        )
    }
}

/* get dragged */
const sourceSpec = {
    beginDrag(props){
        return {props }
    }
}

const sourceCollect  = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


/* get dragged onto */
const targetSpec  = {
    drop(props, monitor, component) {
        const item = monitor.getItem()
        console.log("me or my friend?", item)
    },
    hover(props, monitor, component){
        console.log("yo what you hoverin there for homie?")
    }
}

const targetCollect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}


export default
    DragSource(ItemTypes.CATEGORY, sourceSpec, sourceCollect)(
    DropTarget(ItemTypes.CATEGORY, targetSpec, targetCollect)(
CategoryTreeFork))