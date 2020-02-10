import React from "react";
import Message from './Message';
import ArrowLeft from '../../lib/icons/ArrowLeft.svg';
import Trash from '../../lib/icons/Trash.svg';

export default {
  title: "Message"
};

const Container = ({children, blue}) => {
  const styles = {
      marginTop: 25,
      marginLeft: 85,
      maxWidth: 650,
      height: 550,
      padding: '25px 30px',
      background: '#f5f8fb'
  }

  return (
    <div style={styles}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {children}
      </div>
    </div>
)}

const getRandomId = () => {
  return Math.random().toString();
}

export const Default = () => {
  return <Container>
    <Message
      id={getRandomId()}
      date={'2019-12-01T10:20:30Z'}
      bgColor='#1972f5'
      textColor='#ffffff'
      avatarOptions={{text: 'A'}}
    >
      Hello, how are you?
    </Message>

    <div style={{marginTop: '15px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{visibility: 'hidden'}}
      >
       Need to talk. Are you there?
      </Message>
    </div>

    <div style={{marginTop: '15px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{visibility: 'gone'}}
      >
        Reply me as soon as you are free. We need to talk
      </Message>
    </div>

    <div style={{marginTop: '15px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{text: 'A'}}
      >
        This is a nice message with some <b>html</b>. 
        <br/>
        <a href="https://www.w3schools.com/html/html_intro.asp"
          target="_blank" 
          style={{color: 'white'}}
        > Read More</a>
      </Message>
    </div>
  </Container>
}

export const ReverseLayout = () => {
  return <Container>
    <Message 
      id={getRandomId()}
      date={new Date()}
      bgColor='#1972f5'
      textColor='#ffffff'
      avatarOptions={{text: 'A'}}
      position='right'
    >
      Hello, how are you?
    </Message>

    <div style={{marginTop: '15px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{visibility: 'hidden'}}
        position='right'
      >
       Need to talk. Are you there?
      </Message>
    </div>

    <div style={{marginTop: '15px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{visibility: 'gone'}}
        position='right'
      >
        Reply me as soon as you are free. We need to talk
      </Message>
    </div>
  </Container>
}

export const WithActions = () => {
  return <Container>
    <Message 
      id={getRandomId()}
      date={new Date()}
      bgColor='#1972f5'
      textColor='#ffffff'
      avatarOptions={{url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg'}}
      actions={[
        { id: 'edit', text: 'Repy', icon: <ArrowLeft style={{fill: '#000000'}}/> },
        { id: 'delete', text: 'Delete', icon: <Trash />, showInline: true },
      ]}
    >
      Hello, how are you?
    </Message>

    <div style={{marginTop: '8px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{visibility: 'hidden'}}
        actions={[
          { id: 'edit', text: 'Repy', icon: <ArrowLeft style={{fill: '#000000'}}/> },
          { id: 'delete', text: 'Delete', icon: <Trash />, showInline: true },
        ]}
      >
        These message has actions 😍. Sweet, right?
      </Message>
    </div>

<div style={{marginTop: '8px'}}>
  <Message
    id={getRandomId()}
    date={new Date()}
    position="right"
    avatarOptions={{visibility: 'gone'}}
    actions={[
      { id: 'edit', text: 'Repy', icon: <ArrowLeft style={{fill: '#000000'}}/> },
      { id: 'delete', text: 'Delete', icon: <Trash />, showInline: true },
    ]}
    onMessageActionClick={(e) => console.log(e)}
  >
    Yeah, pretty cool. Oh! btw, my message logs the action click to the console 😁👍
  </Message>
</div>
  </Container>
}

export const WithAttachments = () => {
  return <Container>
    <Message 
      id={getRandomId()}
      date={new Date()}
      bgColor='#1972f5'
      textColor='#ffffff'
      avatarOptions={{url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg'}}
    >
      Hello, how are you?
    </Message>

    <div style={{marginTop: '8px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{visibility: 'hidden'}}
        attachments={[
          {
            name: 'dummy.pdf',
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: '64kb', },
          {
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: 'File without a name' }
        ]}
      >
        This message has some files attached to it. Nice isn't it? 😎
      </Message>
    </div>

<div style={{marginTop: '8px'}}>
  <Message
    id={getRandomId()}
    date={new Date()}
    position="right"
    avatarOptions={{visibility: 'gone'}}
    attachments={[
      {
        url: 'https://i.blogs.es/aced7b/8c5f984f-1d3e-499e-91f7-5d0f4922fb43/450_1000.jpg',
        displayAsImg: true
      },
      {
        url: 'https://vignette.wikia.nocookie.net/villains/images/9/98/CLassicAhri3.jpg/revision/latest?cb=20190626002046',
        displayAsImg: true
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eFO7nP5QD8J8_xbQdNJadZGAayabFU9hFU5wxG3iHyqlFk8l&s',
        displayAsImg: true
      },
      {
        name: 'dummy.pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        description: '64kb' 
      },
    ]}
  >
    That's nothing. You can easily attach images to a message, and they are rendered as a nice grid gallery 🤳
  </Message>
</div>
  </Container>
}

export const WithAttachmentsEvents = () => {
  return <Container>
    <Message 
      id={getRandomId()}
      date={new Date()}
      bgColor='#1972f5'
      textColor='#ffffff'
      avatarOptions={{url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_15.jpg'}}
    >
      Hello, how are you?
    </Message>

    <div style={{marginTop: '8px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        bgColor='#1972f5'
        textColor='#ffffff'
        avatarOptions={{visibility: 'hidden'}}
        attachments={[
          {
            name: 'dummy.pdf',
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
          {
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: 'File without a name' }
        ]}
      >
        This message has some files attached to it. Nice isn't it? 😎
      </Message>
    </div>

    <div style={{marginTop: '8px'}}>
      <Message
        id={getRandomId()}
        date={new Date()}
        position="right"
        avatarOptions={{visibility: 'gone'}}
        onMessageAttachmentClick={(e) => console.log(e)}
        attachments={[
          {
            url: 'https://i.blogs.es/aced7b/8c5f984f-1d3e-499e-91f7-5d0f4922fb43/450_1000.jpg',
            displayAsImg: true
          },
          {
            url: 'https://vignette.wikia.nocookie.net/villains/images/9/98/CLassicAhri3.jpg/revision/latest?cb=20190626002046',
            displayAsImg: true
          },
          {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eFO7nP5QD8J8_xbQdNJadZGAayabFU9hFU5wxG3iHyqlFk8l&s',
            displayAsImg: true
          },
          {
            name: 'dummy.pdf',
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: '64kb'
          },
        ]}
      >
        Nice, my attachments have events 😁, you can see the logs in the console 😎
      </Message>
    </div>
  </Container>
}