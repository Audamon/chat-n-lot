import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';

function SideBar() {
  return (
    <SideBarContainer>
        <UserContainer>
            <StyledAvatar />
            <h4>João</h4>
        </UserContainer>
    
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background-color: var(--chat-color);
    border-top: 1px solid #74AEAD;
`;

const StyledAvatar = styled(Avatar)`

`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
    
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