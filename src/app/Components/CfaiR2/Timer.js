"use client";

import React, {useRef, useState, useEffect} from 'react';
import './Timer.css';


const Timer = ({timeInSeconds}) => {
    const [timer, setTimer] = useState(timeInSeconds);
    const [timerPaused, setTimerPaused] = useState(false);
    const timerRef = useRef(null);

    const onStartTimer = () => {
        timerRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
    }

    useEffect(() => {
        onStartTimer();
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    useEffect(() => {
        if (timer == 0) {
            clearInterval(timerRef.current);
        }
    }, [timer])

    
    const onPauseTimer = () => {
        if(timerPaused) return;
        setTimerPaused(true);
        clearInterval(timerRef.current);
    }

    const onContinueTimer = () => {
        if(!timerPaused) return;
        onStartTimer();
        setTimerPaused(false);
    }

    const onResetTimer = () => {
        clearInterval(timerRef.current);
        setTimer(timeInSeconds);
        setTimerPaused(false);
        onStartTimer();
    }

    const timeInMin = Math.floor(timer/60);
    const timeInSec = timer%60;



    return (
        <div className='timerWrapper'>
            {timeInMin + 'm : '+ timeInSec + 's'}
            <button onClick={onContinueTimer} disabled={!timerPaused}>Continue</button>
            <button onClick={onPauseTimer} disabled={timerPaused}>Pause</button>
            <button onClick={onResetTimer}>Reset</button>
        </div>
    )
}

export default Timer;