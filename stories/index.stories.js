/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import styled, { ThemeProvider } from 'styled-components';
import {
  IconButton,
  ActionIconButton,
  OutlineButton
} from '../src/components/Button';
import { Input, TextArea, Select } from '../src/components/Input';
import Thumbnail from '../src/components/Thumbnail';
import Modal from '../src/components/Modal';
import Video from '../src/components/Video';
import Card from '../src/components/Card';
import theme from '../theme';
import AddWhite from '../assets/add-white.svg';
import image from '../assets/video.png';
import Add from '../assets/add.svg';
import Back from '../assets/back.svg';
import Check from '../assets/check.svg';
import Close from '../assets/close.svg';
// reset css
// eslint-disable-next-line import/imports-first
import 'sanitize.css';

const Wrapper = styled.div`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
`;

const WrapperGroupButton = styled.div`
  display: flex;
  button {
    margin-right: 15px;
  }
`;

const Container = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);

storiesOf('IconButton', module)
  .add('with border-radius', () => (
    <Container>
      <IconButton
        icon={<AddWhite />}
        type="button"
        handleClick={() => console.log(1)}
        rounder
      >
        IconButton
      </IconButton>
    </Container>
  ))
  .add('without border-radius', () => (
    <Container>
      <IconButton
        icon={<AddWhite />}
        type="button"
        handleClick={() => console.log(1)}
      >
        IconButton
      </IconButton>
    </Container>
  ))
  .add('OutlineButton', () => (
    <Container>
      <OutlineButton
        icon={<Add />}
        type="button"
        handleClick={() => console.log(1)}
      >
        IconButton
      </OutlineButton>
    </Container>
  ));

storiesOf('ActionButton', module)
  .add('with border-radius', () => (
    <Container>
      <ActionIconButton
        icon={<Add />}
        type="button"
        handleClick={() => console.log(1)}
        rounder
      />
    </Container>
  ))
  .add('without border-radius', () => (
    <Container>
      <ActionIconButton
        icon={<Add />}
        type="button"
        handleClick={() => console.log(1)}
        rounder
      />
    </Container>
  ));

const datas = [
  { key: 1, name: 'Iphone' },
  { key: 2, name: 'Samsung' },
  { key: 3, name: 'Bphone' }
];
storiesOf('Input', module)
  .add('default', () => (
    <Container>
      <Input name="User name" value="" onChange={() => console.log(1)} />
    </Container>
  ))
  .add('select', () => (
    <Container>
      <Select
        name="User name"
        value=""
        datas={datas}
        onChange={() => console.log(1)}
      />
    </Container>
  ))
  .add('textarea', () => (
    <Container>
      <TextArea name="User name" value="" onChange={() => console.log(1)} />
    </Container>
  ));

storiesOf('Thumbnail', module).add('default', () => (
  <Container>
    <Thumbnail image={image} />
  </Container>
));

storiesOf('Modal', module)
  .add('hidden', () => (
    <Container>
      <Modal />
    </Container>
  ))
  .add('show', () => (
    <Container>
      <Modal open />
    </Container>
  ));

storiesOf('Icon', module)
  .add('add', () => (
    <Container>
      <Add />
    </Container>
  ))
  .add('back', () => (
    <Container>
      <Back />
    </Container>
  ))
  .add('check', () => (
    <Container>
      <Check />
    </Container>
  ))
  .add('close', () => (
    <Container>
      <Close />
    </Container>
  ));
storiesOf('Video', module).add('to Storybook', () => (
  <Container>
    <Video src="https://www.w3schools.com/html/mov_bbb.mp4" />
  </Container>
));
const data = {
  title: 'Moon Facts: Fun Information About the Earths Moon',
  category: 'Space',
  time: '12 Feb, 2018',
  description:
    'The moon is the easiest celestial object to find in the night sky — when its there.Earths only natural satellite hovers above us bright and…',
  image
};
storiesOf('Card', module)
  .add('with buton', () => (
    <Container>
      <Card
        data={data}
        footer={
          <IconButton
            icon={<AddWhite />}
            type="button"
            handleClick={() => console.log(1)}
            rounder
          >
            IconButton
          </IconButton>
        }
      />
    </Container>
  ))
  .add('with array botton', () => (
    <Container>
      <Card
        data={data}
        footer={
          <WrapperGroupButton>
            <ActionIconButton
              icon={<Add />}
              type="button"
              handleClick={() => console.log(1)}
              rounder
            />
            <ActionIconButton
              icon={<Back />}
              type="button"
              handleClick={() => console.log(1)}
              rounder
            />
            <ActionIconButton
              icon={<Check />}
              type="button"
              handleClick={() => console.log(1)}
              rounder
            />
          </WrapperGroupButton>
        }
      />
    </Container>
  ));

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
