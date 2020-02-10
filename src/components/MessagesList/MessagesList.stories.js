import React from "react";
import MessagesList from './MessagesList';

import { createMessages } from '../ChatGenerator';

export default {
  title: "MessagesList"
};

const Container = ({children}) => (
  <div style={
    {
      width: 450,
      height:460,
      border: '1px solid #e5e5e5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      background: '#fff'
  }}>
      {children}
  </div>
)


export const Default = () => {
  const messages = createMessages(8);
  return (
    <Container>
      <MessagesList 
        messages={messages}
      />
    </Container>
  );
}