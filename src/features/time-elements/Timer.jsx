import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startBlackTimer, startWhiteTimer, runTimer } from "./TimeSelecterSlice";

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
        <div>
        <p>Time left: {whiteTime} : {blackTime}</p>
        <button onClick={_handleWhiteToMove}>white to move</button>
        <button onClick={_handleBlackToMove}>black to move</button>
        </div>
    )
};

export default Timer;