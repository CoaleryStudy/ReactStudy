import React, { useReducer } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import MyAlert, {
  DEFAULT,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './components/MyAlert';
import Divider from './components/Divider';
import MyInput from './components/MyInput';
import { data } from './data';

const CHANGE_INPUT = 'CHANGE_INPUT';

const initialState = {
  input: {
    id: '',
    pw: ''
  },
  loginState: DEFAULT
};

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: {
          ...state.input,
          [action.name]: action.value
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginState: LOGIN_SUCCESS
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginState: LOGIN_FAIL
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: CHANGE_INPUT,
      name,
      value
    });
  };

  const onClick = () => {
    let count = data.filter(
      (element) =>
        element.id === state.input.id && element.pw === state.input.pw
    ).length;

    if (count >= 1) {
      window.location.href = 'http://localhost:3000/success';
    } else {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  return (
    <div className="box">
      <MyInput
        placeholder="아이디"
        onChange={onChange}
        value={state.input.id}
        name="id"
      />
      <Divider size={0.5} />
      <MyInput
        placeholder="비밀번호"
        password
        onChange={onChange}
        value={state.input.pw}
        name="pw"
      />
      <Divider size={0.5} />
      <Button className="someButton" color="success" onClick={onClick}>
        로그인
      </Button>
      <MyAlert status={state.loginState} />
    </div>
  );
}

export default App;
