import React from 'react';
import { Grow, Avatar } from '@material-ui/core';
import * as Spinners from 'react-spinners';

import './style.scss';

const InMessage = ({ text }) => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <div className="message-in">
      <Avatar className="avatar">BT</Avatar>
      {loading ? (
        <Spinners.ScaleLoader loading={loading} color={'#36D7B7'} height={15} width={2} />
      ) : (
        <div className="message-in_content">
          <Grow in={true} timeout={500} style={{ transformOrigin: 'top left' }}>
            <p>{text}</p>
          </Grow>
        </div>
      )}
    </div>
  );
};

export default InMessage;
