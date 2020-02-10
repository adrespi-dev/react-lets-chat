import React from "react";

import Input from './Input';

export default {
  title: "Input"
};

const Container = ({children}) => (
  <div style={{maxWidth: 450,  height: 386, border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column'}}>
    <div style={{flex: '1 0', position: 'relative'}}></div>
    {children}
  </div>
)

export const Default = () => (
  <Container>
    <Input />
  </Container>
)