import { atom, useSetRecoilState } from 'recoil';

export const countState = atom({
    key: 'countState',
    default: {count: 0},
});

export function AcquireSetCountSate() {
    const setCountState = useSetRecoilState(countState);
   
    return ({ type, payload }) => {
        console.log(payload);
        setCountState(c => {
            console.log('c',c);
            switch (type) {
                case 'increase':
                    console.log('1');
                    return {
                        count: c.count + payload
                    }
                case 'decrease':
                    console.log('2');
                    return {
                        count: c.count - payload
                    }
                default:
                    console.log('3');
                    return c;
            }
        })
    }
}