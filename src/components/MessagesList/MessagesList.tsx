import React, { useRef, useCallback } from "react";

import './MessagesList.scss';
import { Message as MessageModel, Participant } from "../Models";
import Message from "../Message/Message";
import { AvatarExtend } from "../Message/Types";

interface IProps {
  messages: MessageModel[],
  participants: Participant[]
}

class MessagesList extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };
  }

  

  renderMessages = (messages: MessageModel[]) => {
    const { participants } = this.props;
    const groupedMessages = messages;

    return messages.map((m, i) => {
      const participant = participants.find(p => p.id == m.participantId);
  
      const avatarOptions: AvatarExtend = {
        ...participant.avatarOptions, 
        ...{ text: participant.name }
      };

      const messageProps = {...Message.defaultProps, ...participant.messageOptions};

      const isAvatarVisible = (avatarOptions.visibility === 'visible' || !avatarOptions.visibility);
      if (i < messages.length - 1 && isAvatarVisible) {
        const nextMessage: MessageModel = messages[i + 1];
        const hasSameUser = (nextMessage.participantId === m.participantId);
        avatarOptions.visibility = (hasSameUser)? 'hidden' : 'visible';
      }

      return <div className="rx-chat--message-wrapper">
          <Message key={m.id}
            id={m.id}
            date={m.date}
            avatarOptions={avatarOptions}
            {...messageProps}
          >
            {m.text}
          </Message>
        </div>
    });
  }

  render() {
    const renderMessages = this.renderMessages(this.props.messages);

    return (
      <div className="rx-chat--messages-list">
        {renderMessages}
      </div>
    );
  }

  static defaultProps = {
    messages: [],
    participants: [
      {
        id: 'me', 
        name: 'Me',
        showInTitle: false,
        messageOptions: { position: 'right'},
        avatarOptions: { visibility: 'gone' }
      },
      {
        id: 'them',
        name: 'Them',
        showInTitle: true,
        messageOptions: { textColor: 'white', bgColor: '#1972f5', position: 'left'}
      }
    ]
  }
}
export default MessagesList;
