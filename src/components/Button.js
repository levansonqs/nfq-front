/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-11 22:31:53
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 16:15:33
 */
import React, { memo } from 'react';
import { string, func, bool, node } from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 8px 13px;
  background-color: ${props => props.theme.primaryColor};
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.11px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.whiteColor};
  transition: all 0.25s ease;
  ${props =>
    props.rounder &&
    css`
      border-radius: ${props.theme.borderRadius};
    `};
  svg {
    margin-right: 13px;
  }

  :hover {
    background-color: ${props => props.theme.primaryHoverColor};
  }

  :visited {
    background-color: ${props => props.theme.primaryActiveColor};
  }
`;

function Button({ children, handleClick, type, rounder, icon }) {
  return (
    <ButtonWrapper type={type} onClick={handleClick} rounder={rounder}>
      {icon}
      <span>{children}</span>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  type: string,
  icon: node.isRequired,
  handleClick: func.isRequired,
  children: string.isRequired,
  rounder: bool
};
Button.defaultProps = {
  type: 'button',
  rounder: false
};

const ActionButtonWrapper = styled.button`
  border: 1px solid #ceced2;
  padding: 15px;
  color: ${props => props.theme.whiteColor};
  transition: all 0.25s ease;
  svg g {
    transition: all 0.25s ease;
    fill: ${props => props.theme.actionColor}!important;
  }
  svg path {
    transition: all 0.25s ease;
    fill: ${props => props.theme.actionColor}!important;
  }
  ${props =>
    props.rounder &&
    css`
      border-radius: ${props.theme.borderRadius};
    `};

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.9);
    svg g {
      fill: rgba(0, 0, 0, 0.9) !important;
    }
    svg path {
      fill: rgba(0, 0, 0, 0.9) !important;
    }
  }
`;

function ActionButton({ icon, handleClick, type, rounder }) {
  return (
    <ActionButtonWrapper type={type} onClick={handleClick} rounder={rounder}>
      {icon}
    </ActionButtonWrapper>
  );
}

ActionButton.propTypes = {
  type: string,
  handleClick: func.isRequired,
  icon: node.isRequired,
  rounder: bool
};
ActionButton.defaultProps = {
  type: 'button',
  rounder: false
};

const ButtonOutlineWrapper = styled.button`
  padding: 8px 13px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.11px;
  line-height: 17px;
  text-align: center;
  border: 1px solid #ceced2;
  border-radius: 3px;
  opacity: 0.4000000059604645;
  color: ${props => props.theme.blackColor};
  transition: all 0.25s ease;
  ${props =>
    props.rounder &&
    css`
      border-radius: ${props.theme.borderRadius};
    `};
  svg {
    margin-right: 13px;
  }
`;

function ButtonOutline({ children, handleClick, type, rounder, icon }) {
  return (
    <ButtonOutlineWrapper type={type} onClick={handleClick} rounder={rounder}>
      {icon}
      <span>{children}</span>
    </ButtonOutlineWrapper>
  );
}

ButtonOutline.propTypes = {
  type: string,
  icon: node.isRequired,
  handleClick: func.isRequired,
  children: string.isRequired,
  rounder: bool
};
ButtonOutline.defaultProps = {
  type: 'button',
  rounder: false
};

const ActionIconButton = memo(ActionButton);

const IconButton = memo(Button);
const OutlineButton = memo(ButtonOutline);

export { ActionIconButton, IconButton, OutlineButton };
