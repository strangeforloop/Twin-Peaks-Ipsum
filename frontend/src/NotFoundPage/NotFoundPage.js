import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={
      { 'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
      'margin-top': '10%'
      }}>
      <h1>404</h1>
      <div>This page is not as it seems...</div>
    </div>
  );
}

export default NotFoundPage;
