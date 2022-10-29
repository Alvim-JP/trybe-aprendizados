import { combineReducers, createStore } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';
import reducerCombinado from './reducers/index';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer,
});

const store = createStore(reducerCombinado);

store.subscribe(() => {
  console.log(store.getState());
});

export default reducerCombinado;

const Redux = require('redux');
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }