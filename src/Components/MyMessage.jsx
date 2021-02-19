import React from 'react';

const MyMessage = ({ message }) => {
  //if the message is greater than 0, it is an image
  if (message?.attatchments?.length > 0) {
    return (
      <img
        src={message.attatchments[0].file}
        alt="message-attatchment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }
  
  return (
    <div
      className="message"
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: '#3B2A50'
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
