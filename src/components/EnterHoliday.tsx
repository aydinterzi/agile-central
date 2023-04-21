"use client";

import { useState } from "react";
import Calendar from "react-calendar";

const EnterHoliday = () => {
  const [value, onChange] = useState(new Date());

  const enterHoliday = async () => {
    const res = await fetch(`api/holiday`, {
      method: "POST",
      body: JSON.stringify({ holidayDate: value, userId: 1, sprintId: 1 }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <button onClick={enterHoliday}>Enter Holiday</button>
    </div>
  );
};

export default EnterHoliday;
