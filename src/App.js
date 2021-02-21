import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import './App.css';
import LoginForm from './Components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) {
    return <LoginForm />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID_KEY}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
