/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:22:31
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:22:31
 */
import { fromJS } from 'immutable';
import { SEARCH_TERM } from './constants';

const initial = {
  loading: false,
  error: false,
  total: 0,
  items: []
};

const nasas = (state = fromJS(initial), action) => {
  switch (action.type) {
    case SEARCH_TERM: {
      return state
        .set('items', action.data.items)
        .set('total', action.data.total);
    }
    default:
      return state;
  }
};

export default nasas;
