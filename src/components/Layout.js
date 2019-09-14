/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:24:51
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:24:51
 */
import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 73px 38px;
  a {
    text-decoration: none;
  }
`;

export default memo(function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
});
