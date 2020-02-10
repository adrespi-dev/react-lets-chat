import React, { useState } from "react";

import './LoadingImage.scss';
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

interface IProps {
  className?: string; 
  src: string;
  isLoading?: boolean;
  loadingColor?: string
}

const LoadingImage: React.FC<IProps> = (props) => {
  const { src, className, loadingColor} = props;
  
  const [isLoading, setIsLoading] = useState(props.isLoading); 

  return (
    <div className={`rx-chat-loading-img-wrapper ${className}`} >
      {isLoading && <LoadingOverlay color={loadingColor}/>}
      <img src={src} onLoad={() => setIsLoading(false)}/>
    </div>
  );
};

LoadingImage.defaultProps = {
  isLoading: true
}

export default LoadingImage;
