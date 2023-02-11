import { createSlice } from "@reduxjs/toolkit";
import IRoom from "interfaces/IRoom";

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
          players: [],
          status: "playing",
        },
        {
          code: "CPQKDL",
          name: "Guerreiros da baguncinha",
          permission: "public",
          players: [],
          status: "playing",
        },
      ];
    },
  },
});

export const { getRoomList } = roomListSlice.actions;

export default roomListSlice.reducer;