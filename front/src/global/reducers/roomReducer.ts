import { createSlice } from "@reduxjs/toolkit";
import IRoom from "interfaces/IRoom";
import playerMock from "mocks/playerMock";

interface roomListState {
  value: IRoom[];
}

const initialState: roomListState = { value: [] };

export const roomListSlice = createSlice({
  name: "roomList",
  initialState,
  reducers: {
    getRoomList: (state) => {
      state.value = [
        {
          code: "JRXYQH",
          name: "Caçadores de Aventuras",
          permission: "private",
          players: [playerMock],
          status: "playing",
          consoleMessages: []
        },
        {
          code: "CPQKDL",
          name: "Guerreiros da baguncinha",
          permission: "public",
          players: [],
          status: "playing",
          consoleMessages: []
        },
      ];
    },
  },
});

export const { getRoomList } = roomListSlice.actions;

export default roomListSlice.reducer;