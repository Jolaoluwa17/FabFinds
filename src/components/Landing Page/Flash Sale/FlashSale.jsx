"use client";
import React, { useEffect, useRef, useState } from "react";
import "./flashSale.css";

const FlashSale = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("May 30, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 )) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="flash-sale-root">
      <div className="img-container">
        <div className="flash-sales-container">
          <div className="flash-sales-content">
            <h1>Flash Sale</h1>
            <h3>Hurry! Offers End Soon</h3>
            <div className="timer-container">
              <div className="days">
                <div className="days-value">{timerDays}</div>
                <div className="days-text">Days</div>
              </div>
              <div className="hours">
                <div className="hours-value">{timerHours}</div>
                <div className="hours-text">Hours</div>
              </div>
              <div className="minutes">
                <div className="minutes-value">{timerMinutes}</div>
                <div className="minutes-text">Mins</div>
              </div>
              <div className="seconds">
                <div className="seconds-value">{timerSeconds}</div>
                <div className="seconds-text">Sec</div>
              </div>
            </div>
            <div className="flash-sale-btn">
              <button>Shop Flash Sale</button>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1695889499/FabFinds%20Frontend/clark-street-mercantile-P3pI6xzovu0-unsplash_nils9f.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FlashSale;
