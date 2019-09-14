/*
 * @Author: sonlv@nexlesoft.com 
 * @Date: 2019-09-14 17:19:40 
 * @Last Modified by:   sonlv@nexlesoft.com 
 * @Last Modified time: 2019-09-14 17:19:40 
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import Close from '../../assets/close-white.svg';
import Video from '../components/Video';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 109px 32px;
  min-height: 100vh;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #ffffff;
    font-family: Helvetica;
    font-size: 35px;
    font-weight: 400;
    letter-spacing: -0.84px;
    line-height: 42px;
    opacity: 0.75;
    text-align: left;
  }
`;

export default memo(function VideoComponent() {
  return (
    <Wrapper>
      <div className="header">
        <h1>Moon Facts: Fun Information About the Earth`&apos;`s Moon</h1>
        <Close />
      </div>
      <Video src="https://www.w3schools.com/html/mov_bbb.mp4" />
    </Wrapper>
  );
});
