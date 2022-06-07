export const ADD = 'ADD';
export const add = () => {
    return {
        type: ADD
    }
}
// 컴포넌트에서 dispatch가 실행되면, 리듀서 함수는 액션 값을 참조해 작업을 실행한다.
