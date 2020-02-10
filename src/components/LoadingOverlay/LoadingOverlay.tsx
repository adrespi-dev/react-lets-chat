import React, { useState } from "react";

import './LoadingOverlay.scss';

interface IProps {
  color: string;
}

const LoadingOverlay: React.FC<IProps> = (props) => {
  const { color } = props;
  return (
    <div className="rx-chat-loading-overlay">
      <div className="rx-chat-loading-ring">
        <div style={{borderColor: `${color} transparent transparent transparent`}}></div>
        <div style={{borderColor: `${color} transparent transparent transparent`}}></div>
        <div style={{borderColor: `${color} transparent transparent transparent`}}></div>
        <div style={{borderColor: `${color} transparent transparent transparent`}}></div>
      </div>
    </div>
  );
};

LoadingOverlay.defaultProps = {
  color: '#1972f5'
}

export default LoadingOverlay;
