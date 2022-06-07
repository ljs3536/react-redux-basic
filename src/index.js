import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);

const listener = () => {
  ReactDOM.render(
    <Provider store={store}>
        <App indexProp="코딩병원119"/>
    </Provider>,  
    document.getElementById('root')
  );
}

// 구독을 해야 store 데이터에 변화가 있을 때, listner 함수의 render를 실행하고 변경된 데이터를 렌더링
store.subscribe(listener);
listener();
