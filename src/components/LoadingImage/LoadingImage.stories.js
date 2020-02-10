import React from "react";
import LoadingImage from './LoadingImage';

export default {
  title: "LoadingImage"
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
  }}>
      {children}
  </div>
)


export const Default = () => (
  <Container>
    <LoadingImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg"/>
  </Container>
)