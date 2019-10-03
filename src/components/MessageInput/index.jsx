import React from 'react';
import { Divider, Input, IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { OUT_MESSAGE } from '../../containers/ChatWidget/constants';
import './style.scss';

const MessageInput = props => {
  const handleSubmit = e => {
    e.preventDefault();
    if (!!props.value) {
      props.addMessage(OUT_MESSAGE, props.value, false);
      props.handleChange('');
      props.responseRequested();
    }
  };

  const handleChange = e => {
    props.handleChange(e.target.value);
  };

  const disableProps = !props.value && { disabled: true };

  return (
    <div className="input-message">
      <Divider />
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Type a message"
          disableUnderline={true}
          className="input"
          onChange={handleChange}
          value={props.value}
        />
        <IconButton {...disableProps} aria-label="send" className="submit-button" onClick={handleSubmit}>
          <Send>Filled</Send>
        </IconButton>
      </form>
    </div>
  );
};

export default MessageInput;
