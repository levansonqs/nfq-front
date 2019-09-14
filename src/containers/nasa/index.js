/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:22:47
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:22:47
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import NasaSearch from '../../pages/NasaSearch';
import { searchAction } from './action';
import { addAction } from '../main/action';

const mapStateToProps = state => {
  const data = state.get('nasas').toJS();
  return data;
};

export default connect(
  mapStateToProps,
  { searchAction, addAction }
)(NasaSearch);
