import React, { Component } from 'react';
import StrAddButton from './StrAddButton';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return(
      <div className="App-header">
        <h1>안녕하세요</h1>
        <span>{this.props.str}</span>
        <br/>
        <StrAddButton AddProp="100"/>
      </div>
    )
  }
}

/**
 * 데이터 세팅.
 * @param {object} state 스토어의 state 변수 
 * @param {object} props 부모 컴포넌트에서 전달한 props
 * @returns {any} str store의 state 값
 */
let mapStateToProps = (state, props) => {
  console.log(props.indexProp)
  return {
    str: state.data.str
  };
};

// connect의 첫번째 파라미터를 통해 store의 state에 접근 가능
// react-redux 패키지의 connect 함수는 파라미터를 4개까지 받을 수 있는데, 파라미터 위치에 따라 미리 정의된 함수나 Object를 사용할 수 있다.
App = connect(mapStateToProps, null)(App);

export default App;