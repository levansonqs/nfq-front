/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:17:52
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:17:52
 */
import { combineReducers } from 'redux-immutable';
import nasas from './src/containers/nasa/reducer';
import main from './src/containers/main/reducer';
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    nasas,
    main,
    ...injectedReducers
  });
}
