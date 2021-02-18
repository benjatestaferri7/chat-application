import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, i) => {
      const message = messages[key];
      const lastMessageKey = i === 0 ? null : keys[i - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${i}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage /> : <TheirMessage />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px'
            }}
          ></div>
        </div>
      );
    });
  };

  renderMessages();

  return <div>ChatFeed</div>;
};

export default ChatFeed;
