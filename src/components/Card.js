/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-12 15:16:25
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 16:12:00
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { object } from 'prop-types';
import Thumbnail from './Thumbnail';

const Wrapper = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 20px;
  .sub {
    display: flex;
    justify-content: space-between;
    color: #000000;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.09px;
    line-height: 21px;
    opacity: 0.6000000238418579;
    text-align: right;
    margin-top: 30px;
  }
  h1 {
    color: #000000;
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.58px;
    line-height: 29px;
    text-align: left;
    margin-top: 10px;
  }
  p {
    color: #000000;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.11px;
    line-height: 21px;
    opacity: 0.6000000238418579;
    text-align: left;
    margin-top: 12px;
  }
  .footer {
    margin-top: 11px;
  }
  width: 30%;

  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Card = memo(function Card({ footer, data }) {
  return (
    <Wrapper>
      <Thumbnail image={data.image} />
      <div className="sub">
        <div>{data.category}</div>
        <div>{data.time}</div>
      </div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className="footer">{footer}</div>
    </Wrapper>
  );
});

Card.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: object
};

Card.defaultProps = {
  data: {
    title: 'Moon Facts: Fun Information About the Earths Moon',
    category: 'Space',
    time: '12 Feb, 2018',
    description:
      'The moon is the easiest celestial object to find in the night sky — when its there.Earths only natural satellite hovers above us bright and…',
    image: '../../assets/video.png'
  }
};

export default Card;
