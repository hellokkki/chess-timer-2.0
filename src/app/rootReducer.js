import { combineReducers } from "redux";
import counterSlice from "../features/counter/counterSlice";
import timerSlice  from "../features/time-elements/TimeSelecterSlice";
import battlefieldSlice from "../features/game-holder-folder/battlefieldSlice";

export const rootReducer = combineReducers({
   counter: counterSlice,
   timer: timerSlice,
   battlefield: battlefieldSlice,
});