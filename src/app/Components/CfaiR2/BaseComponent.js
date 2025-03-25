"use client";

import React, {useState} from 'react';

import Timer from '../Timer'

const BaseComponent = () => {
    const [inputTime, setInputTime] = useState(0);
    const [timerVisible, setTimerVisible] = useState(false);

    const onChangeTimeIput = (e) => {
        const value = e.target.value;
        setInputTime(value * 60);
    }

    const onSubmitTime = () => {
        setTimerVisible(true);
    }

    if (timerVisible) {
        return <Timer timeInSeconds={inputTime}></Timer>
    }

    return (
        <div>
            <input type="number" placeholder='Enter in minutes' onChange={onChangeTimeIput} />
            <button onClick={onSubmitTime}>Submit</button>
        </div>
    )
}

export default BaseComponent;