import React from "react";
import FilePicker from './FilePicker';

export default {
  title: "FilePicker"
};

const Container = ({children}) => (
  <div style={
    {
      width: 350,
      height:350,
      padding: '15px', 
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


export const Default = () => (
  <Container>
    <FilePicker/>
  </Container>
)