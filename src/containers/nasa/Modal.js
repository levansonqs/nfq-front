/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:22:40
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:22:40
 */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import ModalForm from '../../components/ModalForm';
import { addNasa, handleEditNasa } from '../main/action';

function ModalContainer(props) {
  return <ModalForm {...props} />;
}

const mapStateToProps = state => {
  const data = state.get('main').toJS();
  return data;
};

export default connect(
  mapStateToProps,
  { addNasa, handleEditNasa }
)(ModalContainer);
