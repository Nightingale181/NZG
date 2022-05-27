import React, { useEffect } from "react";

import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';

function Doit() {
    // _________________________________________________
    // Initialize Gridstack inside useEffect so that DOM is rendered when its initialized
    // _________________________________________________
    useEffect(() => {
        let grid = GridStack.init();
    });
    // _________________________________________________
    // _________________________________________________

    return (
        <div className="App">
            <div class="grid-stack">
                <div class="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div class="grid-stack-item-content">Item 1</div>
                </div>
                <div class="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div class="grid-stack-item-content">Item 2</div>
                </div>
                <div class="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div class="grid-stack-item-content">Item 3</div>
                </div>
            </div>
        </div>
    );
}

export default Doit;