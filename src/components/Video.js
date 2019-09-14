/*
 * @Author: sonlv@nexlesoft.com 
 * @Date: 2019-09-12 14:44:34 
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-12 15:04:06
 */
import React, { memo } from 'react';
import {string} from 'prop-types';

const Video = memo(function Video({src}) {
  return (
    <video width="100%" controls autoPlay="autoplay">
      <source src={src} type="video/mp4"/>
      <source src={src} type="video/ogg"/>
      <track kind="captions" />
          Your browser does not support HTML5 video.
    </video>
  )
})

Video.propTypes = {
  src: string.isRequired,
}

export default Video
