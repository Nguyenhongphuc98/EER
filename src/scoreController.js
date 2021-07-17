import {AcquireSetCountSate} from "./recoil/atom";
import {Score} from "./recoil/action";

class ScoreController {

    plus() {
        console.log('p');
        AcquireSetCountSate()(Score.increase)
    }

    minus() {
        console.log('m');
        AcquireSetCountSate()(Score.decrease)
    }
}

export const scoreController = new ScoreController();