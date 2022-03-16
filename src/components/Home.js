import React from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import Channel from './Channel';
import SideBar from './SideBar';

function Home() {
    const [ channels ] = useCollection(db.collection('rooms')); 
  return (
    <>
    <SideBar />
    <HomeContainer>
        {channels?.docs.map(doc => (
            <Channel key={doc.id} id={doc.id} title={doc.data().roomName} />
        ))}

    </HomeContainer>
    </>
  )
}

export default Home

const HomeContainer = styled.div`
    background-color: var(--chat-background) ;
    flex:0.8;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 60px;
`;