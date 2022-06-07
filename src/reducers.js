import {ADD} from './actions'
import {combineReducers} from 'redux';

const initState = {
    str: 100
}

const data = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return state, {
                str: state.str + 100
            };
        default:
            return state;
    }
}

//combineReducers 함수는 여러 함수가 있따면, 하나의 리듀싱 함수로 변환시키고 src의 index.js에서 사용한
//createStore 함수의 파라미터로 넘겨진다. 스토어 state 값에 변경이 발생했기 때문에 subscribe 함수가 동작해 화면이 다시 렌더링 된다.
const Reducers = combineReducers({
    data
})

export default Reducers;