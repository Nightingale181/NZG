import { useDrop } from 'react-dnd';
import CompanyCard from "../CompanyCard";
import {Game} from "../../Game";
import {Square} from "./Square";


export const BoardSquare = ({G,ctx,moves,children}) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "companyCard" ,
        drop: () => {},
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }), [G,ctx,moves]);


    return (<div ref={drop} style={{
        width: '100px',
        height: '100px',
    }}>
            <Square>{children}</Square>

    </div>
    );
};
