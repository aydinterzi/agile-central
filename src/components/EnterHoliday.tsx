"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EnterHoliday = () => {
  const auth = useAuth();
  const [value, onChange] = useState(new Date());
  const router = useRouter();

  const enterHoliday = async () => {
    const res = await fetch(`api/holiday`, {
      method: "POST",
      body: JSON.stringify({
        holidayDate: value,
        userId: auth.id,
        sprintId: 1,
      }),
    });
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-2">
      <Calendar onChange={onChange} value={value} />
      <button onClick={enterHoliday} className="btn btn-primary">
        ENTER HOLIDAY
      </button>
    </div>
  );
};
export default EnterHoliday;
