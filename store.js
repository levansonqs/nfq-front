import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';

// Create redux store
const initialState = localStorage.nasas ? localStorage.nasas : {};
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(createReducer(), fromJS(initialState), enhancer);

// save to local storage
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

// subscribe any change
store.subscribe(
  throttle(() => {
    saveState({
      main: store
        .getState()
        .get('main')
        .toJS()
    });
  })
);

export default store;
