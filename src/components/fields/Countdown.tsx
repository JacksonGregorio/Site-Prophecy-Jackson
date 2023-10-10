"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

function CountComponent() {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const targetDate = new Date("2023-12-31T23:59:59");

    const calculateTimeRemaining = () => {
        const currentTime = new Date();
        const timeDifference = targetDate.getTime() - currentTime.getTime();

        if (timeDifference > 0) {
            const remainingDays = Math.floor(
                timeDifference / (1000 * 60 * 60 * 24),
            );
            const remainingHours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const remainingMinutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
            );
            const remainingSeconds = Math.floor(
                (timeDifference % (1000 * 60)) / 1000,
            );

            setDays(remainingDays);
            setHours(remainingHours);
            setMinutes(remainingMinutes);
            setSeconds(remainingSeconds);
        }
    };

    useEffect(() => {
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="coming-time">
            <div className="ClassyCountdown-wrapper">
                <div className="ClassyCountdown-days">
                    <div className="ClassyCountdown-value">
                        <div className="time-count">
                            <span>{days}</span>
                        </div>
                    </div>
                </div>
                <div className="ClassyCountdown-hours">
                    <div className="ClassyCountdown-value">
                        <div className="time-count time-counthour">
                            <span>{hours}</span>
                        </div>
                    </div>
                </div>
                <div className="ClassyCountdown-minutes">
                    <div className="ClassyCountdown-value">
                        <div className="time-count time-countmin">
                            <span>{minutes}</span>
                        </div>
                    </div>
                </div>
                <div className="ClassyCountdown-seconds">
                    <div className="ClassyCountdown-value">
                        <div className="time-count time-countsec">
                            <span>{seconds}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountComponent;
