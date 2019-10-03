import React from 'react';
import { Grow } from '@material-ui/core';

import './style.scss';

const OutMessage = ({ text }) => {
  return (
    <div className="message-out">
      <Grow in={true} style={{ transformOrigin: 'center right' }} timeout={800}>
        <p>{text}</p>
      </Grow>
    </div>
  );
};

export default OutMessage;
