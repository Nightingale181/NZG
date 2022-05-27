import React from "react";
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';

export class DragItem extends React.Component {
    state = {
        count: 0,
        info: "",
        items: [
            { x: 2, y: 1, h: 2 },
            { x: 2, y: 4, w: 3 },
            { x: 4, y: 2 },
            { x: 3, y: 1, h: 2 },
            { x: 0, y: 6, w: 2, h: 2 },
        ],
    };

    componentDidMount() {
        // Provides access to the GridStack instance across the React component.
        this.grid = GridStack.init({
            float: true,
            cellHeight: "70px",
            minRow: 1,
        });

        this.grid.on("dragstop", (event, element) => {
            const node = element.gridstackNode;
            this.setState({
                info: `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`,
            });

            // Clear the info text after a two second timeout.
            // Clears previous timeout first.
            window.clearTimeout(this.timerId);
            this.timerId = window.setTimeout(() => {
                this.setState({
                    info: "",
                });
            }, 2000);
        });
    }

    addNewWidget = () => {
        const node = this.state.items[this.state.count] || {
            x: Math.round(12 * Math.random()),
            y: Math.round(5 * Math.random()),
            w: Math.round(1 + 3 * Math.random()),
            h: Math.round(1 + 3 * Math.random()),
        };
        node.id = node.content = String(this.state.count);
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
        this.grid.addWidget(node);
    };

    render() {
        return (
            <div>

                <button type="button" onClick={this.addNewWidget}>
                    Add Widget
                </button>
                {this.state.info}
                <section class="grid-stack"></section>
            </div>
        );
    }
}
