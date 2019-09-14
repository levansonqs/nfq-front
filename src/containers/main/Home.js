/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:23:09
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:23:09
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import Home from '../../pages/Home';
import { addAction, deleteNasa, likeNasa, editNasa } from './action';

const mapStateToProps = state => {
  const data = state.get('main').toJS();
  return data;
};

export default connect(
  mapStateToProps,
  { addAction, deleteNasa, likeNasa, editNasa }
)(Home);
