import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import SideBarOption from './SideBarOption';
import AddIcon from '@material-ui/icons/Add';
import { ExitToApp} from '@material-ui/icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth } from '../firebase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';

function SideBar() {
    const [user] = useAuthState(auth);
    
  return (
    <SideBarContainer>
      
        <UserContainer>
            <StyledAvatar
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <h4>{auth.currentUser?.displayName || user?.email }</h4>
        </UserContainer>
        <hr/>
        <SideBarOption updateProfileOption Icon={AccountCircleIcon} title='Update Profile'/>
        <hr/>
        <SideBarOption channelsOption Icon={ChatIcon} title='Channels'/>
        <hr/>
        <SideBarOption addChannelOption Icon={AddIcon} title='Add Channel'/>
        <hr/>
        <SideBarOption Icon={ExitToApp} title='Log Out'/>
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
    flex: 0.2;
    background-color: var(--chat-color);
    border-top: 2px solid #74AEAD;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #74AEAD;
    }
`;

const StyledAvatar = styled(Avatar)`

`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-bottom: 10px ;
  padding: 13px;
    
    > h4 {
        text-align: center;
        margin-left: 8px;
        color: white;
    }
    > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }

`;
