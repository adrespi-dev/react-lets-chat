import React from "react";

import './Avatar.scss';

export interface AvatarOptions {
    text?: string;
    url?: string;
    rounded?: boolean;
    showStatus?: boolean;
    status?: 'on' | 'off';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    bg?: string;
    color?: string;
    style?: React.CSSProperties,
}

const Avatar: React.FC<AvatarOptions> = (props) => {
  const { text, url, rounded, showStatus, status, size, bg, color, style } = props;
  
  return (
    <div 
      className={`rx-chat-avatar ${rounded && 'is-rounded'} is-size-${size}`}
      style={{...{
        background: bg,
        color: color
      }, ...style}}
    >
      {text && (<div className="rx-chat-avatar--text">{text[0]}</div>)}
      {url && (<img className="rx-chat-avatar--img" src={url} />)}
      {showStatus && <div className={`rx-chat-topbar--status status-is-${status}`}/>}
    </div>
  );
};

Avatar.defaultProps = {
  rounded: true,
  showStatus: true,
  status: 'on',
  size: 'md',
  bg: '#512da8',
  color: 'white'
}

export default Avatar;
