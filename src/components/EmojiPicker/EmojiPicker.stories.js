import React, { useState } from "react";

import EmojiPicker from './EmojiPicker';

export default {
  title: "EmojiPicker"
};

const Container = ({children}) => (
  <div style={{maxWidth: 450,  height: 306, border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column'}}>
    {/* <div style={{flex: '1 0', position: 'relative'}}></div> */}
    {children}
  </div>
)

export const Default = () => (
  <Container>
    <EmojiPicker />
  </Container>
)

export const Filtering = () => {
  const [searchTerm, setSearchTerm] = useState('Smiling');
  return (
    <Container>
      <input style={{marginBottom: 25}} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <EmojiPicker searchTerm={searchTerm}/>
    </Container>
  )
}
