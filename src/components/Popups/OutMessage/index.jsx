import React from 'react';
import { Grow } from '@material-ui/core';

import './style.scss';

const OutMessage = ({ text }) => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => setLoading(false), 800);
  return (
    <div className="message-out">
      <Grow in={true} style={{ transformOrigin: 'center right' }} timeout={800}>
        <p>
          {text}
          {loading && <img src="/assets/firework.gif" alt="Firework" className="firework" />}
        </p>
      </Grow>
    </div>
  );
};

export default OutMessage;
