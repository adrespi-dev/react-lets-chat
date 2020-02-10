import React from "react";
import MessageEvent from './MessageEvent';

export default {
  title: "MessageEvent"
};

const Container = ({children, blue}) => {
  const styles = {
      maxWidth: 450,
      height: 550,
      border: '1px solid #e5e5e5',
      padding: '4px 6px',
  }

  return (
    <div style={styles}>
      {children}
    </div>
)}

const types = ['info', 'success', 'danger'];
const messages = {
  info: 'Your friend has connected',
  success: 'Something great just happened :)',
  danger: 'Your crush has started a relationship'
};

const create = (avatars) => {
  return (<div>
    <Container> {avatars} </Container>
  </div>
)} 

export const Defautlt = () => {
  const avatars = types.map(type => (
    <div style={{marginTop: '26px', display: 'flex', justifyContent: 'center'}}>
      <MessageEvent type={type}>
        {messages[type]}
      </MessageEvent>
    </div>
  ));
  return create(avatars);
}


export const WithoutIcons = () => {
  const avatars = types.map(type => (
    <div style={{marginTop: '26px', display: 'flex', justifyContent: 'center'}}>
      <MessageEvent type={type} showIcon={false}>
        {messages[type]}
      </MessageEvent>
    </div>
  ));
  return create(avatars);
}

