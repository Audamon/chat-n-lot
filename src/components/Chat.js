import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ChatInput from "./ChatInput";
import Message from "./Message";

function Chat() {
    const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  const navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    navigate("/");
  };
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);
  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
      <>
        <ChatHeader>
          <ChatHeaderLeft>
            <Button onClick={back}>
              <ArrowBackIcon />
            </Button>
          </ChatHeaderLeft>
          <ChatHeaderMiddle>
            <h2>{roomDetails?.data().roomName}</h2>
          </ChatHeaderMiddle>
          <ChatHeaderRight>Invite</ChatHeaderRight>
        </ChatHeader>
        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();
            return (
              <Message
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
                key={doc.id}
              />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput
          chatRef={chatRef}
          channelName={roomDetails?.data().roomName}
          channelId={roomId}
        />
      </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  background-color: var(--chat-background);
  overflow-y: scroll;
  flex-grow: 1;
  margin-top: 60px;
`;

const ChatHeader = styled.div`
  display: flex;
  background-color: var(--chat-color);
  border: 2px solid #74aead;
  height: 50px;
  position: fixed;
  width: 100%;
`;
const ChatHeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  padding-left: 10px;
  align-items: center;

  > button {
    color: white;

    :hover {
      opacity: 0.8 !important;
      background-color: #097f7d;
    }
  }
`;
const ChatHeaderMiddle = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  > h2 {
    font-weight: 400;
    color: white;
  }
`;
const ChatHeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  color: white;
`;

const ChatMessages = styled.div`
margin-top: 50px;
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;