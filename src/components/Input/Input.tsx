import React, { useCallback, useState, useRef } from "react";

import './Input.scss';
import { Message } from "../Models";
import Smile from '../../lib/icons/Smile.svg';
import Search from '../../lib/icons/Search.svg';
import Send from '../../lib/icons/Send.svg';

import Popover from 'react-awesome-popover';
import EmojiPicker from "../EmojiPicker/EmojiPicker";
import FilePicker from "../FilePicker/FilePicker";
import InputAttachments from "../InputAttachments/InputAttachments";

interface IProps {
  showEmojiPicker: boolean,
  showFilePicker: boolean,
  placeholder: string,
  onSubmit: (message: Message) => void
}

const Input: React.FC<IProps> = (props) => {
  let input: any = useRef(null);

  const [showEmoticonPopup, setShowEmoticonPopup] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [inputActive, setInputActive] = useState(false);
  const [hoveredEmoji, setHoveredEmoji] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [emojiSearchTerm, setEmojiSearchTerm] = useState('');

  const { placeholder, onSubmit, showEmojiPicker, showFilePicker } = props;

  const handleKeyDown = useCallback((e: any) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      submitMessage();
    }
  },[]);

  const submitMessage = useCallback(() => {
    const inputEl = input.current;
    const text = inputEl.textContent;
    if (text && text.length > 0 || attachments.length > 0) {
    }
    const now = new Date();
    const newMessage: Message = {
      text: text,
      date: now,
      attachments: []
    };
    inputEl.innerHTML = '';
    setAttachments([]);
    setIsEmpty(true);
    if (onSubmit) {
      onSubmit(newMessage);
    }
  }, [props]);

  const handleKeyUp = useCallback((e: any) => {
    const inputEl = input.current;
    const text = inputEl.textContent;

    const hasText = text != null && text.length > 0;
    setIsEmpty(!hasText);
  },[]);

  const handleEmojiClick = useCallback((emoji) => {
    const inputEl = input.current;
    inputEl.innerHTML = inputEl.innerHTML + emoji;
    setIsEmpty(false);
  },[props]);

  const handleFilesPicker = useCallback((newFiles: File[]) => {
    setAttachments(prevAttachments => prevAttachments.concat(newFiles));
  },[props]);
  
  return (
    <div className={`rx-chat-input ${isEmpty ? '' : `has-text`}`}>
      <div className="rx-chat-input-wrapper">
        <div className="rx-chat-input-wrapper--inner">
          <div className="rx-chat-input--attachments-wrapper">
            <InputAttachments
              attachments={attachments}
              onDeleteAttachment={fileToDelete => setAttachments(attachments.filter(f => f != fileToDelete))}/>
          </div>
          <div
            ref={input}
            role="button"
            tabIndex={0}
            onFocus={() => { setInputActive(true) }}
            onBlur={() => { setInputActive(false) }}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            contentEditable={true}
            placeholder={placeholder}
            className="rx-chat-input--text"
          />
        </div>

        <div className="rx-chat-input--buttons">
          {/* BEGIN Emoji Picker */}
          {showEmojiPicker && <Popover 
            placement="top-center" 
            overlayColor={null} 
            arrowProps={{ style: { display: "none" } }}
            open={showEmoticonPopup}
          >
            <button className="rx-emoticon-icon rx-chat-input--button-option">
              <Smile/>
            </button>
            <div className="rx-chat-emoji-popup">
              <div className="rx-chat-emoji-popup--search-wrapper">
                <input placeholder="Search emoji..."
                  value={emojiSearchTerm}
                  onChange={e => setEmojiSearchTerm(e.target.value)}/>
                <button className="search-icon">
                  <Search/>
                </button>
              </div>
              <div className="rx-chat-emoji-popup--emoji-picker-wrapper">
                <EmojiPicker 
                  searchTerm={emojiSearchTerm}
                  onEmojiHover={(emoji) => setHoveredEmoji(emoji)}
                  onEmojiClick={(emoji) => handleEmojiClick(emoji)}
                />
              </div>
              {hoveredEmoji && <div className="rx-chat-emoji-popup--display-emoji-wrapper">
                <div className="display-emoji-wrapper--emoji">
                  {hoveredEmoji.char}
                </div>
                <div className="display-emoji-wrapper--emoji-name">
                  {hoveredEmoji.name}
                </div>
              </div>}
              <div className="rx-chat-emoji-popup--bottom-arrow"></div>
            </div>
          </Popover>}
          {/* END Emoji Picker */}
    
          {/* BEGIN File Picker */}
          {showFilePicker && <FilePicker onFilesPicked={handleFilesPicker}/>}
          {/* END File Picker */}

          <button onClick={submitMessage}
            className="rx-chat-input--button-option rx-send-icon"
            disabled={attachments.length < 1 && isEmpty}>
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

Input.defaultProps = {
  placeholder: 'Write a message',
  showEmojiPicker: true,
  showFilePicker: true
}

export default Input;
