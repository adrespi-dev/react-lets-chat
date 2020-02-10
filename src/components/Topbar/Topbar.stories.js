import React from "react";
import ArrowLeft from '../../lib/icons/ArrowLeft.svg';
import Close from '../../lib/icons/Close.svg';

import Topbar from './Topbar';

export default {
  title: "Topbar"
};

const avatar = {
  url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg'
}

const defaultOptions = [
  {content: <Close/>, position: 'after', onClick: () => console.log('Close Clicked')},
  {content: <ArrowLeft/>, position: 'before', onClick: () => console.log('Arrow Left Clicked')},
]

const Container = ({children}) => (
  <div style={{maxWidth: 450, border: '1px solid #e5e5e5'}}>
    {children}
  </div>
)

export const OnlyTitle = () => (
  <Container>
    <Topbar 
      title="Dylan Espinoza" 
      avatarOptions={avatar}
    />
  </Container>
)

export const TitleSubtitle = () => (
  <Container>
    <Topbar 
      title="Dylan Espinoza" 
      subtitle="Connected 3 hours ago"
      avatarOptions={avatar}
    />
  </Container>
)

export const LargeText = () => (
  <Container>
    <Topbar
      title="Dylan Espinoza Reyna. Really Long Name isn't it?. Should be truncated btw" 
      subtitle="Once upon a time you dressed so fine. Threw the bums a dime in your prime, didn't you?"
      avatarOptions={avatar}
    />
  </Container>
)

export const WithOptions = () => (
  <Container>
    <Topbar 
      title="Dylan Espinoza" 
      subtitle="Connected 3 hours ago"
      avatarOptions={avatar}
      toolbarOptions={defaultOptions}
    />
  </Container>
)

export const CustomBg = () => (
  <Container>
    <Topbar 
      title="Dylan Espinoza" 
      subtitle="Connected 3 hours ago"
      avatarOptions={avatar}
      toolbarOptions={defaultOptions}
      bg="#512da8"
    />
  </Container>
)