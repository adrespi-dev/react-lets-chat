import React from "react";

import './Topbar.scss';
import Avatar, { AvatarOptions } from "../Avatar/Avatar";
import TopbarOption from "../TopbarOption/TopbarOption";

interface IProps {
  title: string;
  subtitle?: string;
  avatarOptions: AvatarExtend;
  toolbarOptions:  ToolbarOption[];
  bg: string;
}

interface AvatarExtend extends AvatarOptions {
  visible: boolean;
}

const defaultAvatarOptions: AvatarExtend = {
  visible: true
}

interface ToolbarOption {
  position: 'before' | 'after';
  visible: boolean;
  content: any;
  onClick?: () => any;
}

const Topbar: React.FC<IProps> = (props) => {
  const { title, subtitle, bg, toolbarOptions } = props;

  let avatarOptions = {...props.avatarOptions, ...defaultAvatarOptions};

  if (avatarOptions.visible && (!avatarOptions.text && !avatarOptions.url)) {
    avatarOptions.text = title[0];
  }

  const toolbarBefore =  [];
  const toolbarAfter =  [];

  toolbarOptions.forEach((opt, i) => {
    const _optionComponent = <TopbarOption key={i} onClick={opt.onClick}>
      {opt.content}
    </TopbarOption>;
    if (opt.position === 'before') {
      toolbarBefore.push(_optionComponent);
    } else {
      toolbarAfter.push(_optionComponent);
    }
  });

  return (
    <div className="rx-chat-topbar" style={{background: bg}}>
      <div className="rx-chat-toolbar-before">
        {toolbarBefore}
      </div>
      <div className="rx-chat-topbar--avatar-wrapper">
        {avatarOptions.visible && <Avatar {...avatarOptions}/>}
      </div>
      <div className="rx-chat-topbar--title-wrapper">
        <div className="rx-chat-topbar--title">{title}</div>
        {subtitle && <div className="rx-chat-topbar--subtitle">{subtitle}</div>}
      </div>
      <div className="rx-chat-toolbar-after">
        {toolbarAfter}
      </div>
    </div>
  );
};

Topbar.defaultProps = {
  toolbarOptions: [],
  bg: '#1972f5'
}

export default Topbar;
