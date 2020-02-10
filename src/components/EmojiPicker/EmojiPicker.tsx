import React, { useCallback } from "react";

import './EmojiPicker.scss';
import EmojiConvertor from 'emoji-js';
import emojis from './emojis';

const emojiConvertor = new EmojiConvertor();
emojiConvertor.init_env();

interface IProps {
    searchTerm: string;
    onEmojiHover?: (emoji: any) => void;
    onEmojiClick?: (emoji: any) => void;
} 

const EmojiPicker: React.FC<IProps> = (props) => {
    const { onEmojiHover, onEmojiClick, searchTerm } = props;

    const handleEmojiHover = useCallback((emoji: any) => {
        if (onEmojiHover) {
            onEmojiHover(emoji);
        }
    }, [props]);

    const handleEmojiClick = useCallback((emoji: any) => {
        if (onEmojiClick) {
            onEmojiClick(emoji);
        } else {
            console.log(emoji);
        }
    }, [props]);


    const parsedSearchTerm = !searchTerm ? null: searchTerm.toLowerCase();

    return (
        <div className="rx-chat-emoji-picker">
            {emojis.map((category) => {
            const filteredEmojis = !parsedSearchTerm ? 
                category.emojis : category.emojis.filter(({ name }) => name.includes(parsedSearchTerm));
            return (
                <div className="rx-chat-emoji-picker--category" key={category.name}>
                {
                    filteredEmojis.length > 0 &&
                <div className="rx-chat-emoji-picker--category-title">{category.name}</div>
                }
                {filteredEmojis.map(({ char, name }) => {
                    return (
                    <span
                        key={char}
                        className="rx-chat-emoji-picker--emoji"
                        onMouseEnter={() => handleEmojiHover({char, name})}
                        onClick={() => handleEmojiClick(char)}
                    >
                        {char}
                    </span>
                    );
                })}
                </div>
            );
            })}
        </div>
    );
}

export default EmojiPicker;