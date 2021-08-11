import React, { Component } from 'react'
import { DragSource, DropTarget } from 'react-dnd'

const elementSource = {
    beginDrag (props) {
        return { }
    }
}
const elementTarget = {
    drop (props, monitor) { }
}

function collect (connect, monitor) {
    
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }

}

class MyComponent extends Component {
    render () {
        const { connectDragSource, isDragging, connectDropTarget, isOver } = this.props

        return connectDragSource(connectDropTarget(
            <div style={{ opacity: isDragging ? 0.5 : 1 }} >
                Just an example
            </div>
        ))
    }
}

MyComponent = DragSource('MyComponent', elementSource, (connect,
                                                        monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(MyComponent);

MyComponent = DropTarget('MyComponent', elementTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))(MyComponent);

export default MyComponent;