import React from "react";
import ArrowLeft from '../../lib/icons/ArrowLeft.svg';

import TopbarOption from './TopbarOption';

export default {
  title: "TopbarOption"
};

const Container = ({children}) => (
  <div style={
    {maxWidth: 350, 
    padding: '15px', 
    border: '1px solid #e5e5e5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#1972f5'
  }}>
      {children}
  </div>
)


export const Default = () => (
  <Container>
    <TopbarOption><ArrowLeft></ArrowLeft></TopbarOption>
  </Container>
)