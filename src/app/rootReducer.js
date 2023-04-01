import { combineReducers } from "redux";
import counterSlice from "../features/counter/counterSlice";
import timerSlice  from "../features/time-elements/TimeSelecterSlice";

export const rootReducer = combineReducers({
   counter: counterSlice,
   timer: timerSlice
});