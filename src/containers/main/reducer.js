/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:17:41
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:23:30
 */
import { fromJS } from 'immutable';
import _ from 'lodash';
import {
  ADD,
  ADD_NASA,
  DELETE_NASA,
  LIKE_NASA,
  EDIT,
  EDIT_NASA
} from './constants';

// load state from local storage
const initial = !_.isEmpty(localStorage.state)
  ? JSON.parse(localStorage.state).main
  : {
      data: [],
      action: 'ADD',
      nasa: []
    };

const main = (state = fromJS(initial), action) => {
  switch (action.type) {
    case ADD: {
      return state.set('data', action.data).set('action', action.action);
    }
    case EDIT: {
      return state.set('data', action.data).set('action', action.action);
    }
    case ADD_NASA: {
      return state.updateIn(['nasa'], arr => arr.push(fromJS(action.data)));
    }
    case EDIT_NASA: {
      return state.set(
        'nasa',
        state
          .get('nasa')
          .map(item =>
            item.get('id') === action.data.id
              ? fromJS({ like: item.like, ...action.data })
              : item
          )
      );
    }
    case DELETE_NASA: {
      return state.set(
        'nasa',
        state.get('nasa').filter(item => item.get('id') !== action.id)
      );
    }
    case LIKE_NASA: {
      return state.set(
        'nasa',
        state
          .get('nasa')
          .map(item =>
            item.get('id') === action.id
              ? fromJS({ ...item.toJS(), like: !item.get('like') })
              : item
          )
      );
    }
    default:
      return state;
  }
};

export default main;
