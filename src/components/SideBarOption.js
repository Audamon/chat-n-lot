import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function SideBarOption({Icon, title, addChannelOption}) {
    const addChannel = () => {
        const channelName = prompt("Enter the channel name");
        if(channelName){
            db.collection('rooms').add({
                roomName: channelName,
            })
        }
    }
  return (
    <SideBarOptionContainer
        onClick={ addChannel}
    >
        {Icon && <Icon />}
        <h3>{title}</h3>
    </SideBarOptionContainer>
  )
}

export default SideBarOption

const SideBarOptionContainer = styled.div`
    display: flex;
    color: white;
    align-items: center ;
    font-size: 12px;
    padding-left: 10px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #097F7D;
    }
`;