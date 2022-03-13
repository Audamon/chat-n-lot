import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';
import {useNavigate} from 'react-router-dom';


function Channel({title, id}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectRoom = () => {
        if(id){
            dispatch(enterRoom({
                roomId: id,
            }));
            navigate('/chat');
        }
        
    }
  return (
    <ChannelContainer
        onClick={selectRoom}
    >
        <h3>{title}</h3>
    </ChannelContainer>
  )
}

export default Channel

const ChannelContainer = styled.div`
    background-color: var(--chat-color) ;
    width: 150px;
    height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 8px rgba(0,0,0,0.12), 0 5px 7px rgba(0,0,0,0.24);
    margin: 10px;

    > h3 {
        color: white;
        font-weight: 400;
        text-align: center;

    }
    cursor: pointer;
    :hover {
        opacity: 0.9;
    }
`;