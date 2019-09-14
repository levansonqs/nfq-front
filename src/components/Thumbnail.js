/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-12 16:51:23
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 11:38:18
 */
import React, { memo } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Play from '../../assets/play.svg';

const Wrapper = styled.div`
  position: relative;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.7);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  img {
    width: 100%;
    height: 100%;
  }
  .play {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    width: 44.1px;
    height: 44px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    transition: all 0.25s ease;
  }

  svg {
    width: 18px;
    height: 23.94px;
    margin-left: 5px;
    transition: width height 0.25s ease;
  }
  :hover {
    box-shadow: 0 40px 20px -20px rgba(0, 0, 0, 0.7);
    .play {
      width: 53.9px;
      height: 53.78px;
    }
    svg {
      width: 22px;
      height: 29.27px;
    }
  }
`;

const Thumbnail = memo(function Thumnail({ image }) {
  return (
    <Link to="/video">
      <Wrapper>
        <img src={image} alt="thumb nail" />
        <div className="play">
          <Play />
        </div>
      </Wrapper>
    </Link>
  );
});

Thumbnail.propTypes = {
  image: string.isRequired
};

export default Thumbnail;
