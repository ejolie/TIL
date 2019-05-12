import { createStore } from 'redux';

const lightDiv = document.getElementsByClassName('light')[0];
const switchButton = document.getElementById('switch-btn');

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');

// action type 정의
// 상태에 변화를 일으키는 액션
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action function 정의
// 액션 객체를 만드는 함수들
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increment = () => ({type: INCREMENT, diff});
const decrement = () => ({type: DECREMENT});

// initial state 설정
const initialState = {
	light: false,
	counter: 0,
}

// reducer function 정의
// state와 action을 변화를 실행함
function reducer(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_SWITCH:
		return {
			...state, // 기존의 값은 그대로 유지
			light: !state.light 
		}

		case INCREMENT:
			return {
				...state,
				counter: state.counter + action.diff
			}

		case DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}

		default:
			// 지원하지 않는 액션의 경우 상태 유지
			return state;
	}
}

// store 만들기
const store = createStore(reducer);

// render function 만들기
const render = () => {
	const state = store.getStage(); // 현재 상태를 가져옴
	const { light, counter } = state;
	if (light) {
		lightDiv.style.background = 'green';
		switchButton.innerText = '끄기';
	}
	else {
		lightDiv.style.background = 'gray';
		switchButton.innerText = '켜기';
	}
	counterHeadings.innerText = counter;
};

render();

// subscribe
store.subscribe(render);

// event handler 달아주기
// 액션 발생시키기
switchButton.onclick = () => {
  store.dispatch(toggleSwitch());
}

plusButton.onclick = () => {
  store.dispatch(increment(5));
}

minusButton.onclick = () => {
  store.dispatch(decrement());
}
