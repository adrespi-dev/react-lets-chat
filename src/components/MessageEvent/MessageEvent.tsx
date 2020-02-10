import React from "react";
import Info from '../../lib/icons/Info.svg';
import Warning from '../../lib/icons/Warning.svg';

import './MessageEvent.scss';

const icons = {
  info: <Info />,
  success: <Info />,
  danger: <Warning />,
}

export interface MessageEvent {
  type: 'info', 'danger', 'success';
  showIcon: boolean
}

const MessageEvent: React.FC<MessageEvent> = (props) => {
  const { type, showIcon } = props;
  return (
    <div 
      className={`rx-chat-message-event is-${type}`}
    >
      {showIcon && <div className="rx-chat-message-event--icon">
        {icons[type]}
      </div>}
      <div className="rx-chat-message-event--content">
        {props.children}
      </div>
    </div>
  );
};

MessageEvent.defaultProps = {
  type: 'info',
  showIcon: true
}

export default MessageEvent;
