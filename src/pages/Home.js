/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:19:55
 * @Last Modified by:   sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:19:55
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../containers/nasa/Modal';
import Layout from '../components/Layout';
import { IconButton, ActionIconButton } from '../components/Button';
import Card from '../components/Card';
import AddWhite from '../../assets/add-white.svg';
import Heart from '../../assets/heart.svg';
import HeartActive from '../../assets/heart-filled.svg';
import Trash from '../../assets/trash-bin.svg';
import Edit from '../../assets/pen.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  h1 {
    color: #000000;
    font-family: Helvetica;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: -1.21px;
    line-height: 60px;
    opacity: 0.30327;
    text-align: left;
  }
  @media (max-width: 480px) {
    display: block;
    h1 {
      font-size: 35px;
    }
  }
`;

const WrapperGroupButton = styled.div`
  display: flex;
  button {
    margin-right: 15px;
  }
`;

const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = memo(function Home({
  nasa,
  deleteNasa,
  likeNasa,
  history,
  editNasa
}) {
  const [open, setOpen] = React.useState(false);

  function onToggle() {
    setOpen(!open);
  }

  function handleEdit(value) {
    editNasa(value, { action: 'EDIT' });
    onToggle();
  }

  return (
    <Layout>
      <Wrapper>
        <h1>NASA Collection</h1>
        <Link to="/nasa-search">
          <IconButton
            icon={<AddWhite />}
            type="button"
            handleClick={() => null}
            rounder
          >
            Add new item
          </IconButton>
        </Link>
      </Wrapper>
      <WrapperList>
        {nasa.map(value => (
          <Card
            key={value.id}
            data={value}
            footer={
              <WrapperGroupButton>
                <ActionIconButton
                  icon={value.like ? <Heart /> : <HeartActive />}
                  type="button"
                  handleClick={() => likeNasa(value.id)}
                  rounder
                />
                <ActionIconButton
                  icon={<Trash />}
                  type="button"
                  handleClick={() => deleteNasa(value.id)}
                  rounder
                />
                <ActionIconButton
                  icon={<Edit />}
                  type="button"
                  handleClick={() => handleEdit(value)}
                  rounder
                />
              </WrapperGroupButton>
            }
          />
        ))}
      </WrapperList>
      <Modal open={open} onClose={onToggle} history={history} />
    </Layout>
  );
});

export default Home;
