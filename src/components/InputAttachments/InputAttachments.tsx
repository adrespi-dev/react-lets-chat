import React, { useState } from "react";

import './InputAttachments.scss';
import LoadingImage from "../LoadingImage/LoadingImage";

interface IProps {
  attachments: File[],
  onDeleteAttachment: (File) => void
}

const getFileSizeRepresentation = (size: number, decimals = 0): string => {
  if (size === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(size) / Math.log(k));

  return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const InputAttachments: React.FC<IProps> = (props) => {
  const { attachments, onDeleteAttachment } = props;
  
  const loadingImages = attachments.map((a, i) => {
    let content: any;
    const isImage = a.name.match(/.(jpg|jpeg|png|gif|svg|webp)$/i);
    if (isImage) {
      return <div key={i} className="rx-chat-input--attachment-img-wrapper">
        <div className="rx-chat-input--attachment-delete" onClick={() => onDeleteAttachment(a)}>
          x
        </div>
        <LoadingImage src={URL.createObjectURL(a)}/>
      </div>
    } else {
      return <div key={i} className="rx-chat-input--attachment-file-wrapper">
        <div className="rx-attachment-file-wrapper--icon">
          
        </div>
        <div className="rx-attachment-file-wrapper--name">
          {a.name}
        </div>
        <div className="rx-attachment-file-wrapper--size">
          {getFileSizeRepresentation(a.size)}
        </div>
      </div>;
    }
  });
  
  return (
    <div className={`rx-chat-input-attachments ${attachments.length > 0 ? 'has-attachments' : ''}`}>
        {loadingImages}
    </div>
  );
};

InputAttachments.defaultProps = {
}

export default InputAttachments;
