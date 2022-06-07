import React, {Component} from 'react';
import {add} from './actions';
import {connect} from 'react-redux';

class StrAddButton extends Component {
    render() {
        return(
            <input value="+100" type="button" onClick={this.props.addString} />
        )
    }
}

/**
 * 데이터 세팅.
 * @param {func} dispatch 
 * @param {object} props 부모 컴포넌트에서 전달한 props
 * @returns {any}
 */
let mapDispatchToProps = (dispatch, props) => {
    // App.js에서 전달한 props 변수
    console.log(props.AddProp)
    return {
        addString: () => dispatch(add())
    }
}

// connect에 reducer에 액션 전달하는 dispatch 사용
// mapDispatchToProps 함수는 dispatch 함수를 컴포넌트 함수에 바인딩할 수 있다 
// 즉, 컴포넌트 함수가 실행되며 바인딩된 dispatch 함수가 실행된다.
StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;