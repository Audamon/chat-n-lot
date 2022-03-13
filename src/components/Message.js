import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: auto;
  > img {
    height: 40px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-left: 5px;
  border-radius: 8px;
  width: auto;
  background-color: var(--chat-color);
  > h4 {
      color: white;
  }
  > h4 > span {
    color: black;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;

  }
  > p{
      color: white;
      word-break: break-word;
  }
`;
