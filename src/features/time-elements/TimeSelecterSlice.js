import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    blackTime: '00:00:00',
    whiteTime: '00:00:00',
    isWhiteRunning: false,
    isBlackRunning: false,
  },
  reducers: {
    setSelectedTime(state, action) {
      state.whiteTime = action.payload;
      state.blackTime = action.payload;
    },
    startWhiteTimer(state) {
      state.isWhiteRunning = true;
      state.isBlackRunning = false;
    },
    startBlackTimer(state) {
      state.isWhiteRunning = false;
      state.isBlackRunning = true;
    },
    stopTimers(state) {
      state.isWhiteRunning = false;
      state.isBlackRunning = false;
    }, 
    runTimer(state) {
       const activePlayer = state.isWhiteRunning ? 'whiteTime' : 'blackTime';
       const opponentPlayer = state.isWhiteRunning ? 'blackTime' : 'whiteTime';
       const activeTime = state[activePlayer];
       const opponentTime = state[opponentPlayer];

       if (!activeTime) return;

       const parseTimeToSeconds = str => str ? str.split(':').reduce((acc, time) =>(60 * acc) + +time) : "";
       const formatSecondsToTime = seconds => {
        if (seconds === 0) stopTimers();
        seconds--;
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - (hours * 3600)) / 60);  
        let secs = seconds - (hours * 3600) - (minutes * 60);
        let  M, S;
          if (minutes < 10) M = (`0${minutes}`);
          if (secs < 10) S = (`0${secs}`);
          if (hours === 0) return(`${M || minutes} : ${S || secs}`);
          return (`${hours} : ${M || minutes} : ${S || secs}`);
     };

     let newActiveTime = '';
     let newOpponentTime = opponentTime;
     newActiveTime = formatSecondsToTime(parseTimeToSeconds(activeTime));
     state[activePlayer] = newActiveTime;
     state[opponentPlayer] = newOpponentTime;

    },
    },
    });

export const {
  setSelectedTime,
  startWhiteTimer,
  startBlackTimer,
  stopTimers,
  unpause,
  runTimer,
} = timerSlice.actions;

export default timerSlice.reducer;