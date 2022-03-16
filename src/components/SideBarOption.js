import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { db, auth } from '../firebase';

function SideBarOption({Icon, title, addChannelOption, updateProfileOption, channelsOption}) {
    const navigate = useNavigate();
    const addChannel = () => {
        const channelName = prompt("Enter the channel name");
        if(channelName){
            db.collection('rooms').add({
                roomName: channelName,
            })
        }
    }
    const logOut = () => {
        auth.signOut();
        navigate('/');
    }
    const updateProfile = () => {
        navigate('/profile');
    }
    const goToChannels = () => {
        navigate('/');
    }
  return (
    <SideBarOptionContainer
        onClick={addChannelOption ? addChannel : updateProfileOption? updateProfile : channelsOption ? goToChannels : logOut}
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