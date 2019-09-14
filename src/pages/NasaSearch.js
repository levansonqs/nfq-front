/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:19:49
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:19:49
 */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable one-var */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { OutlineButton } from '../components/Button';
import Card from '../components/CardSearch';
import Modal from '../containers/nasa/Modal';
import Back from '../../assets/back.svg';
import Add from '../../assets/add.svg';

const Wrapper = styled.div`
  margin-bottom: 25px;

  span {
    margin-left: 10px;

    color: #784cc0;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.34px;
    line-height: 17px;
    text-align: left;
  }
  h1 {
    color: #000000;
    font-family: Helvetica;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -0.96px;
    line-height: 48px;
    opacity: 0.75;
    text-align: left;
    margin: 45px 0;
  }
  input {
    border: 1px solid #ceced2;
    border-radius: 3px;
    font-size: 20px;
    width: 100%;
    height: 62px;
    padding: 10px 20px;
    opacity: 0.7;
  }

  p {
    color: #000000;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.09px;
    line-height: 14px;
    text-align: left;
    margin: 33px 0;
  }
`;

const WrapperGroupButton = styled.div`
  button {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    span {
      flex-grow: 1;
    }
  }
  button:focus {
    outline: 0;
  }
`;

const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function debounce(a, b, c) {
  let d;
  let e;
  return function() {
    function h() {
      (d = null), c || (e = a.apply(f, g));
    }
    let f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

class NasaSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm,
      open: false,
      addIndex: 0
    };
    this.onToggle = this.onToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.searchRef = React.createRef();
    this.titleRef = React.createRef();
  }

  setSearchTerm = debounce(searchTerm => {
    const { searchAction } = this.props;
    this.setState({ searchTerm });
    searchAction(this.searchRef.current.value);
  }, 1000);

  onToggle() {
    this.setState(previousState => ({
      open: !previousState.open
    }));
  }

  handleAdd(data, action) {
    const { addAction } = this.props;
    const { open } = this.state;
    this.setState({ open: !open });
    addAction(data, action);
  }

  render() {
    const { total, items, history } = this.props;
    const { open } = this.state;
    return (
      <Layout>
        <Wrapper>
          <Link to="/">
            <Back />
            <span>Back to Collection</span>
          </Link>

          <h1>Search from Nasa</h1>
          <input
            placeholder="Type something to search..."
            onChange={this.setSearchTerm}
            ref={this.searchRef}
          />
          {total > 0 && <p>{total} result</p>}
        </Wrapper>

        <WrapperList>
          {items.map(item => (
            <Card
              key={item.data[0].nasa_id}
              data={item}
              footer={
                <WrapperGroupButton>
                  <OutlineButton
                    icon={<Add />}
                    type="button"
                    handleClick={() => this.handleAdd(item, { action: 'ADD' })}
                  >
                    IconButton
                  </OutlineButton>
                </WrapperGroupButton>
              }
            />
          ))}
        </WrapperList>
        <Modal open={open} onClose={this.onToggle} history={history} />
      </Layout>
    );
  }
}

export default NasaSearch;
