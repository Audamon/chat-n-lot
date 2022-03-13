import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
        <h1>Chat'n lot</h1>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  background-color: var(--chat-color);
  height: 60px;
  width: 100%;
  display: flex ;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100000;
  > h1{
      font-family: 'Ubuntu', sans-serif;
      color: white;
      font-size: 26px;
      text-align: center;
  }
`;