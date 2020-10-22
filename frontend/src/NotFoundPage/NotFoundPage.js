import React from 'react';
import { owlImage } from './owlPicture.jpg';

const NotFoundPage = () => {
  return (
    <div>
      <div>This page is not as it seems...</div>
      <img src={ owlImage }></img>
    </div>
  );
}

export default NotFoundPage;
