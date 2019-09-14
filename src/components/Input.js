/* eslint-disable react/no-array-index-key */
/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-11 23:35:55
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-13 19:10:41
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { string, func, any } from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  input {
    border: 1px solid #ceced2;
    border-radius: 3px;
    opacity: 0.4;
    height: 56px;
    color: #000000;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.13px;
    line-height: 19px;
    opacity: 0.7999999999999999;
    text-align: left;
    padding-left: 9px;
    padding-right: 9px;
    padding-top: 26px;
    width: 100%;
    transition: all 0.25s ease;
  }
  label {
    position: absolute;
    color: #000000;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.13px;
    line-height: 19px;
    opacity: 0.3;
    text-align: left;
    top: 19px;
    left: 9px;
    transition: 0.25s ease all;
  }
  :hover {
    input {
      box-shadow: 0 1px 5px 0 rgba(57, 24, 245, 0.9);
    }
  }

  input:focus ~ label {
    top: 7px;
    font-size: 12px;
    font-weight: 400;
  }
  input:valid ~ label {
    top: 7px;
    font-size: 12px;
    font-weight: 400;
  }
`;

const InputComponent = memo(function InputComponent({
  label,
  name,
  value,
  onChange
}) {
  return (
    <Wrapper>
      <input id={name} name={name} onChange={onChange} value={value} />
      <label htmlFor={name}>{name}</label>
    </Wrapper>
  );
});

InputComponent.propTypes = {
  // label: string.isRequired,
  name: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: any.isRequired,
  onChange: func.isRequired
};

const WrapperTextArea = styled.div`
  position: relative;
  margin-bottom: 30px;

  textarea {
    border: 1px solid #ceced2;
    border-radius: 3px;
    opacity: 0.4;
    width: 100%;
    height: 208px;
    color: #000000;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.13px;
    line-height: 19px;
    opacity: 0.7999999999999999;
    text-align: left;
    padding-left: 9px;
    padding-right: 9px;
    padding-top: 26px;
    transition: all 0.25s ease;
  }
  label {
    position: absolute;
    color: #000000;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.13px;
    line-height: 19px;
    opacity: 0.3;
    text-align: left;
    top: 19px;
    left: 9px;
    transition: 0.25s ease all;
  }
  :hover {
    input {
      box-shadow: 0 1px 5px 0 rgba(57, 24, 245, 0.9);
    }
  }

  textarea:focus ~ label {
    top: 7px;
    font-size: 12px;
    font-weight: 400;
  }
  textarea:valid ~ label {
    top: 7px;
    font-size: 12px;
    font-weight: 400;
  }
`;

const TextAreaComponent = memo(function TextAreaComponent({
  label,
  name,
  value,
  onChange
}) {
  return (
    <WrapperTextArea>
      <textarea id={name} name={name} onChange={onChange} value={value} />
      <label htmlFor={name}>{name}</label>
    </WrapperTextArea>
  );
});

TextAreaComponent.propTypes = {
  // label: string.isRequired,
  name: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: any.isRequired,
  onChange: func.isRequired
};

const WrapperSelect = styled.div`
  margin-bottom: 30px;
  position: relative;
  border: 1px solid #ceced2;
  border-radius: 3px;
  height: 56px;

  select {
    opacity: 0.4;
    width: 97%;
    color: #000000;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.13px;
    line-height: 19px;
    opacity: 0.7999999999999999;
    position: absolute;
    top: 26px;
    left: 9px;
    transition: 0.25s ease all;
    background: transparent;
    border: 0;
    border-radius: 0;
    height: 34px;
    -webkit-appearance: none;
  }
  label {
    position: absolute;
    color: #000000;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.13px;
    line-height: 19px;
    opacity: 0.3;
    text-align: left;
    top: 19px;
    left: 9px;
    transition: 0.25s ease all;
  }
  select:focus {
    outline: none;
  }
  select:focus ~ label {
    top: 7px;
    font-size: 12px;
    font-weight: 400;
  }
  select:valid ~ label {
    top: 7px;
    font-size: 12px;
    font-weight: 400;
  }
`;

const SelectComponent = memo(function SelectComponent({
  label,
  name,
  value,
  datas,
  onChange
}) {
  return (
    <WrapperSelect>
      <select value={value} onChange={onChange}>
        {datas &&
          datas.map((data, index) => (
            <option key={index} value={data.key}>
              {data.name}
            </option>
          ))}
      </select>
      <label htmlFor={name}>{name}</label>
    </WrapperSelect>
  );
});

SelectComponent.propTypes = {
  // label: string.isRequired,
  name: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: any.isRequired,
  onChange: func.isRequired
};

const Input = memo(InputComponent);
const TextArea = memo(TextAreaComponent);
const Select = memo(SelectComponent);

export { TextArea, Input, Select };
