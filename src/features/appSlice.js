import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: null,
  status: 'idle',
  userName: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },

    updateNewUserName: (state, action) => {
      state.userName = action.payload.userName;
    }
  },

});

export const { enterRoom, updateNewUserName } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export const updateUserName = (state) => state.app.userName;

export default appSlice.reducer;
