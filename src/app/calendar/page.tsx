"use client";
import { useState, useEffect } from "react";

const Calendar = () => {
  const fetchHolidays = async () => {
    const res = await fetch("/api/holiday");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    fetchHolidays();
  }, []);

  return <div>Calendar</div>;
};

export default Calendar;
