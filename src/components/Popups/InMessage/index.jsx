import React from 'react';
import { Zoom, Avatar } from '@material-ui/core';
import * as Spinners from 'react-spinners';

import './style.scss';

const InMessage = ({ text }) => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <div className="message-in">
      <Avatar className={`avatar ${loading ? 'slide-in' : 'move-vertically'}`}>BT</Avatar>
      <div className="message-in_content">
        {loading ? (
          <Spinners.ScaleLoader loading={true} color={'#36D7B7'} height={15} width={2} className="spinner" />
        ) : (
          <Zoom in={true} timeout={800} style={{ transformOrigin: 'top left' }}>
            <p className="text">{text}</p>
          </Zoom>
        )}
      </div>
    </div>
  );
};

export default InMessage;
