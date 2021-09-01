import React, {useState} from "react";
import {Box, Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from './example'

const useStyles = makeStyles(theme => ({

}));

export const TestBoardDnd = ({G}) => {
    const classes = useStyles();



    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Example G={G} />
            </DndProvider>
        </div>

    );

}