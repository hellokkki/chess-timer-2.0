import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startBlackTimer, startWhiteTimer, runTimer } from "./TimeSelecterSlice";

import './timer.scss';

const Timer = () => {
    const dispatch = useDispatch();
    const { whiteTime, blackTime } = useSelector(state => state.timer);
    const intervalRef = useRef(null);

    const _handleWhiteToMove = () => {
        dispatch(startWhiteTimer());
        intervalRef.current = setInterval(() => {
            dispatch(runTimer());
        }, 1000)
    };

    const _handleBlackToMove = () => {
        dispatch(startBlackTimer());
        intervalRef.current = setInterval(() => {
            dispatch(runTimer());
        }, 1000)
    };

    return (
        <div className="chess-timer">
          <div className="chess-timer--clock wood-texture">
            <div
             className="chess-timer--clock__time chess-timer--clock__time--black"
            >
             <p>white time : {whiteTime}</p>
            </div>
           
             <button 
             onClick={_handleBlackToMove}
             className="btn chess-timer--clock__btn chess-timer--clock__btn--white"
           />
          </div>
          <div className="chess-timer--clock wood-texture">
            <div
            className="chess-timer--clock__time chess-timer--clock__time--black"
            >
            <p>black time : {blackTime}</p>
            </div>
            <button 
            onClick={_handleWhiteToMove}
            className="btn chess-timer--clock__btn chess-timer--clock__btn--black"
            />
          </div>
        </div>
    )
};

export default Timer;