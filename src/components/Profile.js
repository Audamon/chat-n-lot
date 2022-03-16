import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, storage } from "../firebase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Profile() {
  const [userName, setUserName] = useState("");
  const [ image, setImage] = useState();
  const navigate = useNavigate();
  
  const updateProfile = (e) => {
    e.preventDefault();
    storage.ref('users/'+ auth.currentUser.uid + '/profile.jpg').put(image)
    .then(() => {
      storage.ref('users/'+ auth.currentUser.uid + '/profile.jpg').getDownloadURL()
      .then((imgUrl) => {
        console.log(image);
       
        auth.currentUser.updateProfile({
          displayName: userName || auth.currentUser?.displayName,
          photoURL: image ? imgUrl: auth.currentUser?.photoURL ,
        })
      })
    });
    setUserName("");
  };
  const back = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <ProfileContainer>
      <ProfileInnerContainer>
        
          <ButtonBack onClick={back} />
        
        <h1>Update Profile</h1>
        <form>
          <p>Profile Username:</p>
          <input
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <p>Profile Image:</p>
          <input
            //value={password}
            type="file"
            accept="image"
            placeholder="Password"
            onChange={(e) => setImage(e.target.files[0])}
            required
          ></input>
          <Button type="submit" onClick={updateProfile}>
            Update Profile
          </Button>
        </form>
      </ProfileInnerContainer>
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  background-color: var(--chat-background);
  width: 100%;
  height: 100vh;
  display: grid;

  place-items: center;
`;
const ProfileInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 100px 80px 100px;
  text-align: center;
  background-color: var(--chat-color);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;

  > button {
    margin-top: 30px;
    text-transform: inherit !important;
    background-color: var(--chat-background) !important;
    color: white;
  }
  > h1 {
    color: white;
  }
  > form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    > input {
      border: none;
      border-radius: 5px;
      margin-bottom: 10px;
      height: 35px;
      outline: none;
      color: var(--chat-color);
      padding-left: 5px;
      ::placeholder {
        padding-left: 5px;
        color: var(--chat-color);
        font-size: 18px;
      }
    }

    > button {
      text-transform: inherit !important;
      background-color: var(--chat-background) !important;
      color: white;
    }
  }
  > form > p {
    display: flex;
    text-align: flex-start;
    padding-top: 20px;
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
  > a {
    margin-top: 30px;
    color: white;
  }
`;

const ButtonBack = styled(ArrowBackIcon)`
  color: white;
  position: absolute;
  top: 20px;
  left: 50px;
  `;
