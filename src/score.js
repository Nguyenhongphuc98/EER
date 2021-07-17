import React from 'react';
import {store} from "./redux/store";
import { scoreController } from './scoreController';
import { useSelector } from 'react-redux'

const selectCount = state => state.count;

function Score() {
    return (
        <div>
            <h1>{useSelector(selectCount)}</h1>
            <button onClick={scoreController.plus}>Plus</button>
            <button onClick={scoreController.minus}>Minus</button>
        </div>
    );
};

export default Score;