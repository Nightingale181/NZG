import { useState, useCallback, memo } from "react";
import { useDrop,useDrag } from "react-dnd";

const style = {
    border: "1px solid gray",
    height: "15rem",
    width: "15rem",
    padding: "2rem",
    textAlign: "center"
};
const TargetBox = memo(function TargetBox({ onDrop, lastDroppedColor }) {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: 'companyCard',
        drop: () => ({}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),

    });
    // const [{ isDragging }, drag] = useDrag(
    //     () => ({
    //       type: "color",
    //
    //       collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //       })
    //     })
    //
    //   );

    const opacity = isOver ? 1 : 0.7;
    
    return (
        <div
            ref={drop}
            // ref={drag}
            data-color={lastDroppedColor || "none"}
            style={{ ...style,  opacity }}
        >
            <p>card prototype </p>

            {!canDrop && lastDroppedColor && <p>Last dropped: {lastDroppedColor}</p>}
        </div>
    );
});
export const StatefulTargetBox = (props) => {
    const [lastDroppedColor, setLastDroppedColor] = useState(null);
    const handleDrop = useCallback((color) => setLastDroppedColor(color), []);
    return (
        <TargetBox
            {...props}
            onDrop={handleDrop}
        />
    );
};
