/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:23:19
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:23:19
 */
import {
  ADD,
  ADD_NASA,
  DELETE_NASA,
  LIKE_NASA,
  EDIT,
  EDIT_NASA
} from './constants';

export const addAction = (data, action) => dispatch => {
  dispatch({
    type: ADD,
    data,
    action
  });
};

export const addNasa = data => dispatch => {
  dispatch({
    type: ADD_NASA,
    data
  });
};

export const deleteNasa = id => dispatch => {
  dispatch({
    type: DELETE_NASA,
    id
  });
};

export const likeNasa = id => dispatch => {
  dispatch({
    type: LIKE_NASA,
    id
  });
};

export const editNasa = (data, action) => dispatch => {
  dispatch({
    type: EDIT,
    data,
    action
  });
};
export const handleEditNasa = data => dispatch => {
  dispatch({
    type: EDIT_NASA,
    data
  });
};
