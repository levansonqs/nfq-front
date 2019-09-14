/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-14 17:24:02
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:24:23
 */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import uuid from 'uuid/v4';
import Modal from './Modal';
import { IconButton } from './Button';
import { Input, TextArea, Select } from './Input';
import Check from '../../assets/check.svg';

const WrapperModal = styled.div`
  h1 {
    color: #000000;
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.58px;
    line-height: 29px;
    opacity: 0.75;
    text-align: left;
    margin-bottom: 46px;
  }
`;
export default function ModalForm({
  onClose,
  open,
  data,
  action,
  addNasa,
  history,
  handleEditNasa
}) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [type, setType] = React.useState(1);
  const [image, setImage] = React.useState('');
  const [video, setVideo] = React.useState('');
  const [time, setTime] = React.useState('');
  const [category, setCategory] = React.useState('');

  useEffect(() => {
    if (!_.isEmpty(data)) {
      // action add
      if (action.action === 'ADD') {
        setTitle(data.data[0].title);
        setTime(data.data[0].date_created);
        setCategory(data.data[0].center);
        setDescription(data.data[0].description);
        setImage(data.links ? data.links[0].href : '../../assets/video.png');
      } else {
        setTitle(data.title);
        setTime(data.time);
        setCategory(data.category);
        setDescription(data.description);
        setImage(data.image ? data.image : '../../assets/video.png');
      }
    }
  }, [data]);

  function addItem() {
    if (action.action === 'ADD') {
      const nasa = {
        title,
        image,
        video,
        type,
        description,
        time,
        category,
        like: false,
        id: uuid()
      };
      addNasa(nasa);
    } else {
      const nasa = {
        title,
        image,
        video,
        type,
        description,
        time,
        category,
        id: data.id,
        like: data.like
      };
      handleEditNasa(nasa);
    }
    onClose();
    history.push('/');
  }
  return (
    <Modal open={open} onClose={onClose}>
      <WrapperModal>
        <h1>Add to collection</h1>
        <Input
          name="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          name="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Select
          name="Type"
          datas={[{ key: 1, name: 'Image' }, { key: 2, name: 'Video' }]}
          value={type}
          onChange={e => setType(e.target.value)}
        />
        <Input
          name="Link preview image url *"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Input
          name="Link file url *"
          value={video}
          onChange={e => setVideo(e.target.value)}
        />
        <IconButton
          icon={<Check />}
          type="button"
          handleClick={() => addItem()}
          rounder
        >
          Save
        </IconButton>
      </WrapperModal>
    </Modal>
  );
}
