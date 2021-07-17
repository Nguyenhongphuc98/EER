import {store} from "./redux/store";
import {Score} from "./redux/action";

class ScoreController {

    plus() {
        console.log('p');
        store.dispatch(Score.increase);
    }

    minus() {
        console.log('m');
        store.dispatch(Score.decrease);
    }
}

export const scoreController = new ScoreController();