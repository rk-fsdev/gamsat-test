import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';

import * as selectors from './selectors';
import * as actions from './actions';
import { MessageInput, MessageList } from '../../components';
import './style.scss';

class ChatWidget extends Component {
  render() {
    const { currentMessageText, updateCurrentMessageText, responseRequested, messages, addMessage } = this.props;

    return (
      <div className="chat-widget">
        <Container maxWidth="sm" className="container">
          <MessageList messages={messages} />
          <MessageInput
            handleChange={updateCurrentMessageText}
            value={currentMessageText}
            responseRequested={responseRequested}
            addMessage={addMessage}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    currentMessageText: selectors.getCurrentMessageText(),
    messages: selectors.getMessages()
  });

const mapDispatchToProps = dispatch => ({
  updateCurrentMessageText: messageText => dispatch(actions.updateCurrentMessage(messageText)),
  responseRequested: () => dispatch(actions.responseRequested()),
  addMessage: (type, text) => dispatch(actions.addMessage(type, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWidget);
