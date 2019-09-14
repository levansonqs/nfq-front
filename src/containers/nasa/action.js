/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:22:59
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:22:59
 */
import axios from 'axios';
import { SEARCH_TERM } from './constants';
import { apiUrl } from '../../../env';

// eslint-disable-next-line import/prefer-default-export
export const searchAction = term => dispatch => {
  axios.get(`${apiUrl}search?q=${term}`).then(data =>
    dispatch({
      type: SEARCH_TERM,
      data: {
        items: data.data.collection.items,
        total: data.data.collection.metadata.total_hits
      }
    })
  );
};
