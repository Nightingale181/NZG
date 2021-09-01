import { useEffect, useState } from 'react';
import { BoardSquare } from './BoardSquare';
import CompanyCard from "../CompanyCard";
import {IsCard} from "./IsCard";
import {Square} from "./Square";

/** Styling properties applied to the board element */
const boardStyle = {
    width: '408px',
    height: '200px',
    display: 'flex',
    flexWrap: 'wrap',
};
/** Styling properties applied to each square element */
const squareStyle = { width: '100%', height: '100%' };
/**
 * The chessboard component
 * @param props The react props
 */
export const Board = ({G}) => {

    let handCards = G.players[0].handCompanyDeck
    // console.log(handCards);

    let topCard;

    function renderSquare() {

                return (
                    <div >
                        <BoardSquare G={G}/>
                    </div>
                );
    }

    const squares = [];

    const renderCard = (item) => {

        return       <div>
                        <BoardSquare G={G} key={item.id.toString()}  >
                            <IsCard G={G} item={item}  isCard={!handCards.length} />
                        </BoardSquare>
                    </div>
    }



    for (let i = 0; i < 8; i += 1) {
        if (!handCards.length){
            squares.push(renderSquare());
        } else {
            // topCard = handCards.shift();
            // squares.push(renderCard(topCard));


        }


    }
    //[squares[3],squares[5]] = [squares[5],squares[3]]
    // console.log(squares)
    //

    const [squaresState,setSquaresState] = useState(squares);
    // setSquaresState()s
    return <div style={boardStyle}>{squaresState}</div>;
};
