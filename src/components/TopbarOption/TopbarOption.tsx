import React from "react";

import './TopbarOption.scss';

interface IProps {
  onClick?: () => any;
}

const TopbarOption: React.FC<IProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="rx-chat-topbar--option" onClick={onClick}>
      {props.children}
    </div>
  );
};

TopbarOption.defaultProps = {
}

export default TopbarOption;
