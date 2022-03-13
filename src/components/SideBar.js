import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import SideBarOption from './SideBarOption';
import AddIcon from '@material-ui/icons/Add';

function SideBar() {
  return (
    <SideBarContainer>
        <UserContainer>
            <StyledAvatar />
            <h4>João</h4>
        </UserContainer>
        <hr/>
        <SideBarOption addChannelOption Icon={AddIcon} title='Add Channel'/>
        <hr/>
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
