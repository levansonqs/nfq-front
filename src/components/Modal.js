/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:24:11
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:24:11
 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo } from 'react';
import styled from 'styled-components';
import Close from '../../assets/close.svg';

const Wrapper = styled.div`
  display: ${props => (props.open ? 'block' : 'none')}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 16px 21px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);

    .close {
      position: absolute;
      top: 21px;
      right: 21px;
    }
  }
`;

export default memo(function Modal({ open, onClose, children }) {
  return (
    <Wrapper open={open}>
      <div className="modal-content">
        <div className="close" onClick={onClose}>
          <Close />
        </div>
        {children}
      </div>
    </Wrapper>
  );
});
