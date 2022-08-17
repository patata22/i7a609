import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const initialState = {
  socket: "",
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    initSocket(state, { payload: travelId }) {
      const data = {
        auth: { token: sessionStorage.getItem("accessToken") },
        query: { travelId },
      };
      // http://localhost:5000/travel
      // wss://i7a609.p.ssafy.io/travel
      const socket = io("wss://i7a609.p.ssafy.io/travel", data);
      state.socket = socket
      // socket.on("connect", () => {
      //   console.log("connected")
      // })
    },
    addSwapScheduleEvent(state, { payload: { setSchedule, travel } }) {
      state.socket.on("swap schedule", ({day, turn1, turn2}) => {
        const schedule = reorder(travel.schedules[day], turn1, turn2)
        setSchedule({ 
					scheduleIdx: day, 
					schedule
				})
      })
    }
  }
}) 


const { actions, reducer } = socketSlice;
export const { initSocket } = actions;
export default reducer;
