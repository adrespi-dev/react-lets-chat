import React, { useRef, useCallback } from "react";

import './FilePicker.scss';
import Paperclip from '../../lib/icons/Paperclip.svg';

interface IProps {
  onFilesPicked: (e: File[]) => void
}

const FilePicker: React.FC<IProps> = (props) => {
  let fileInput: any = useRef();
  const { onFilesPicked } = props;
  
  const handleFilesChanged = useCallback((e) => {
    const el = fileInput.current;
    const files: File[] = [];
    if (onFilesPicked) {
      const fileList = el.files as FileList;
      for (let i = 0; i < fileList.length; i++) {
        const file = new File([fileList.item(i)], fileList.item(i).name);
        files.push(file);
      }
      onFilesPicked(files);
    }
    el.value = [];
  }, []);

  return (
    <div className="rx-chat--file-picker">
      <button className="rx-chat--file-picker-button"  onClick={() => fileInput.current.click()}>
        <Paperclip/>
      </button>
      <input ref={fileInput}
        onChange={handleFilesChanged}
        type="file" 
        multiple/>
    </div>
  );
};

FilePicker.defaultProps = {
  
}

export default FilePicker;
