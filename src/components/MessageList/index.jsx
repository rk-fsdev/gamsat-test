import React from 'react';

import './style.scss';
import { IN_MESSAGE } from '../../containers/ChatWidget/constants';
import { InMessage, OutMessage } from '../Popups';

const MessageList = React.memo(({ messages }) => {
  let messagesEnd;
  React.useEffect(() => {
    messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <div className="message-list">
      <h1>Messages</h1>
      {!!messages &&
        messages.map((message, index) =>
          message.type === IN_MESSAGE ? (
            <InMessage text={message.text} key={index} />
          ) : (
            <OutMessage text={message.text} key={index} />
          )
        )}
      <div ref={ref => (messagesEnd = ref)}></div>
    </div>
  );
});

export default MessageList;
