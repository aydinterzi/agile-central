"use client";

import { useState } from "react";
import Calendar from "react-calendar";

const EnterHoliday = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <button>Enter Holiday</button>
    </div>
  );
};

export default EnterHoliday;
