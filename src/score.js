import React from 'react';
import { scoreController } from './scoreController';
import {useRecoilValue} from 'recoil';
import {countState} from './recoil/atom';



import {AcquireSetCountSate} from "./recoil/atom";
import {Score as s} from "./recoil/action";
const selectCount = state => state.count;


function Score() {
    const c = useRecoilValue(countState);
    const setStateCount = AcquireSetCountSate();

    return (
        <div>
            <h1>{c.count}</h1>
            {/* <button onClick={scoreController.plus}>Plus</button>
            <button onClick={scoreController.minus}>Minus</button> */}
            <button onClick={() => setStateCount(s.increase)}>Plus</button>
            <button onClick={() =>setStateCount(s.decrease)}>Minus</button>
        </div>
    );
};

export default Score;