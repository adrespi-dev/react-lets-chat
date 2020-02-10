import React from "react";
import  './Message.scss';
import MoreHorizontal from '../../lib/icons/MoreHorizontal.svg';
import Download from '../../lib/icons/Download.svg';
import Popover from 'react-awesome-popover';
import { format } from 'date-fns'

import Avatar from "../Avatar/Avatar";
import { 
  AvatarExtend, 
  ActionProps, 
  ChatMessageActionComponentProps, 
  ChatMessageActionComponentState,
  MessageProps, 
  ChatMessageAttachmentsProps} from "./Types";
import { Attachment } from "../Models";
import LoadingImage from "../LoadingImage/LoadingImage";

const defaultAvatarOptions: AvatarExtend = {
  visibility: 'visible'
}

const defaulAction: ActionProps = {
  showInline: false
}

class Message extends React.Component<MessageProps> {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    bgColor: '#ffffff',
    textColor: '#333',
    position: 'left',
    actions: [],
    attachments: []
  }

  handleMessageActionClicked = (action: ActionProps) => {
    const { onMessageActionClick } = this.props;
    if (onMessageActionClick) {
      onMessageActionClick({action, message: this.props});
    }
  }

  handleMessageAttachmentClicked = (attachment: Attachment) => {
    const { onMessageAttachmentClick } = this.props;
    onMessageAttachmentClick({attachment, message: this.props});
  }
  
  render() {
    const { bgColor, textColor, position, date,
      avatarOptions, actions, attachments, onMessageAttachmentClick } = this.props;
  
    const _avatarOptions = {...defaultAvatarOptions, ...avatarOptions};

    let _date: Date;
    if (typeof date === "string") {
      _date = new Date(date);
    } else {
      _date = date;
    }

    return (
      <div className={`rx-chat-message position-${position}`}>
        {_avatarOptions.visibility != 'gone' &&
          <Avatar {..._avatarOptions} style={{visibility: _avatarOptions.visibility}}/>
        }
        <div className="rx-chat-message--content">
          <div className="rx-chat-message--content-line">
            <div className={`rx-chat-message--bubble`}
              style={{background: bgColor, color: textColor}}
            >
              {this.props.children}
            </div>
            {actions.length > 0 && 
              <MessageActions
                actions={actions}
                onActionClick={this.handleMessageActionClicked}/>}
          </div>
          <div className="rx-chat-message--content-line">
            {attachments.length > 0 && 
              <MessageAttachments 
                attachments={attachments}
                onAttachmentClick={onMessageAttachmentClick? 
                  this.handleMessageAttachmentClicked : null }
              />}
          </div>
          <div className="rx-chat-message--content-line">
            <div className="rx-chat-message--date">
              {format(_date, 'HH:mm')}
            </div>       
          </div>
        </div>
      </div>
    );
  }
}

class MessageActions 
  extends React.Component<ChatMessageActionComponentProps, ChatMessageActionComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };
  }

  handlePopupActionClicked = (action: ActionProps) => {
    this.handleActionClicked(action);
    this.setState({popupVisible: false});
  }

  handleActionClicked = (action: ActionProps) => {
    const { onActionClick: onActionClicked } = this.props;
    if (onActionClicked) {
      onActionClicked(action);
    }
  }

  render() {
    const { actions } = this.props;
  
    const popupItems = actions.filter(a => !a.showInline).map(_a => {
      const a: ActionProps = {...defaulAction, ..._a};
      return <div key={a.id} className="rx-chat-message--option-item" onClick={() => this.handlePopupActionClicked(a)}>
        <div className="rx-chat-message--option-item-text">
          {a.text}
        </div>
        {a.icon && <div className="rx-chat-message--option-item-icon">{a.icon}</div>}
      </div>
    });
    
    const inlineItems = actions.filter(a => a.showInline && a.icon).map(a => {
      return <div key={a.id} className="rx-chat-message--action-item" onClick={() => this.handleActionClicked(a)}>
        {a.icon}
      </div>
    });
  
    return <div className="rx-chat-message--actions">
      {inlineItems}
      <Popover 
        placement="top-center" 
        overlayColor={null} 
        arrowProps={{ style: { display: "none" } }}
        open={this.state.popupVisible}
      >
        <div className="rx-chat-message--action-item" onClick={() => this.setState({popupVisible: true})}>
          <MoreHorizontal />
        </div>
        <div className="rx-chat-actions-popup">
          {popupItems}
          <div className="rx-chat-actions-popup--bottom-arrow"></div>
        </div>
      </Popover>
    </div>
  }
}

class MessageAttachments extends React.Component<ChatMessageAttachmentsProps> {
  constructor(props) {
    super(props);
  }

  handleAttachmentClick(attachment: Attachment) {
    const { onAttachmentClick } = this.props;
    onAttachmentClick(attachment);
  }

  render() {
    const { attachments, onAttachmentClick } = this.props;
    
    const notImages = attachments.filter(a => !a.displayAsImg).map(a => {
      const anchorProps = onAttachmentClick? {onClick: () => this.handleAttachmentClick(a)} : {target: '_blank', href: a.url};
      return <div className="rx-chat-message--file-attachment">
        <a {...anchorProps}>
          <div className="file-attachment--data">
            <div className="file-attachment--name">
              {a.name || a.url}
            </div>
            {a.description && <div className="file-attachment--description">
              {a.description}
            </div>}
          </div>
          <div className="file-attachment--icon">
            <Download />
          </div>
        </a>
      </div>});

    const images = attachments.filter(a => a.displayAsImg).map(a => {
      const anchorProps = onAttachmentClick? {onClick: () => this.handleAttachmentClick(a)} : {target: '_blank', href: a.url};
      return <a className="rx-chat-message--img-attachment"
        {...anchorProps}
      >
        <LoadingImage src={a.url}/>
      </a>});
      
    return <div className="rx-chat-message--attachments">
    <div className="rx-chat-message--file-attachments">
      {notImages}
    </div>
    <div className="rx-chat-message--img-attachments">
      {images}
    </div>
  </div>
  }
}

export default Message;
