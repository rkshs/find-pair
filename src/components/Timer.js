import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const Timer = forwardRef(({timerStarted, reseter}, ref) => {
    const [time, setTime] = useState({
        second: '00',
        minute: '00',
        counter: 0
    })

    useEffect(() => {
        let intervalId;

        if (timerStarted) {
            intervalId = setInterval(() => {
                const secondCounter = time.counter % 60;
                const minuteCounter = Math.floor(time.counter / 60);

                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

                setTime(prevState => ({
                    second: computedSecond,
                    minute: computedMinute,
                    counter: prevState.counter + 1
                }))
            }, 1000)
        }

        return () => clearInterval(intervalId);
    }, [timerStarted, time.counter])

    useImperativeHandle(ref, () => ({
        resetTimer() {
            console.log('trigger')
            setTime(() => ({
                second: '00',
                minute: '00',
                counter: 0
            }))
        }
    }))

    return (
        <span className="time">
            <span className="minute">{time.minute}</span>
            <span>:</span>
            <span className="second">{time.second}</span>
        </span>
    )
})

export default Timer;
