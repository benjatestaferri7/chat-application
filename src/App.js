import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed'
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID_KEY}
      userName={process.env.REACT_APP_USER_NAME}
      userSecret={process.env.REACT_APP_USER_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
};

export default App;
