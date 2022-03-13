import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({channelName, channelId, chatRef}) {
    const [input, setInput] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();
        if(!channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'João',
            userImage: 'https://img.webnovel.com/bookcover/13520985605105905/300/300.jpg?updateTime=1567355284826',
        })
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });
        setInput('');
    }
  return (
    <ChatInputContainer>
        <form>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${channelName}`}/>
            <Button hidden type="submit" onClick={sendMessage}>Send</Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
   border-radius: 20px;

   > form {
       position: relative ;
       display: flex;
       justify-content: center;
   }
   > form > input { 
       position: fixed;
       bottom: 30px;
       width: 60%;
       border: 1px solid var(--chat-color);
       border-radius: 3px;
       padding: 20px;
       outline: none;
       background-color: var(--chat-background);
       color: white;
       ::placeholder {
           color: var(--chat-color);
       }
   }
   > form > button { 
       display: none !important;
   }
`;