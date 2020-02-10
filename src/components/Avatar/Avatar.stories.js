import React from "react";
import Avatar from './Avatar';

export default {
  title: "Avatar"
};

const Container = ({children, blue}) => {
  const styles = {
      maxWidth: 350,
      border: '1px solid #e5e5e5',
      padding: '4px 6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }
  if (blue) {
    styles['background'] = '#1972f5';
    styles['color'] = 'white';
  }

  return (
    <div style={styles}>
      {children}
    </div>
)}

const sizes = ['sm', 'md', 'lg'];

const create = (avatars) => {
  return (<div>
    <Container> {avatars} </Container>
  </div>
)} 

export const RoundedText = () => {
  const avatars = sizes.map(size => (
    <div style={{marginRight: '26px'}}>
      <Avatar
        text="AE"
        size={size}
      />
    </div>
  ));
  return create(avatars);
}

export const SquareText = () => {
  const avatars = sizes.map(size => (
    <div style={{marginRight: '26px'}}>
      <Avatar
        text="AE"
        size={size}
        rounded={false}
      />
    </div>
  ));
  return create(avatars);
}

export const RoundedImg = () => {
  const avatars = sizes.map(size => (
    <div style={{marginRight: '26px'}}>
      <Avatar
        url={'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg'}
        size={size}
      />
    </div>
  ));
  return create(avatars);
}

export const SquareImg = () => {
  const avatars = sizes.map(size => (
    <div style={{marginRight: '26px'}}>
      <Avatar
        url={'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg'}
        size={size}
        rounded={false}
      />
    </div>
  ));
  return create(avatars);
}

export const WithoutStatus = () => {
  const avatars = sizes.map(size => (
    <div style={{marginRight: '26px'}}>
      <Avatar
        url={'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg'}
        showStatus={false}
        size={size}
      />
    </div>
  ));
  return create(avatars);
}