"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EnterHoliday = () => {
  const [value, onChange] = useState(new Date());
  const router = useRouter();
  const enterHoliday = async () => {
    const res = await fetch(`api/holiday`, {
      method: "POST",
      body: JSON.stringify({ holidayDate: value, userId: 1, sprintId: 1 }),
    });
    router.refresh();
  };

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <button onClick={enterHoliday}>Enter Holiday</button>
    </div>
  );
};
export default EnterHoliday;
